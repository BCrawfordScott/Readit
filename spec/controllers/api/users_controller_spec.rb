require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  let!(:user) { create(:user) }
  let!(:valid_params) {
    {
      user: {
        username: "RonSwanson",
        password: "password",
        email: "rswanson@pawneeparks.gov"
      }
    }
  }

  let!(:invalid_params) {
    {
      user: {
        username: "JeremyJam",
        password: "jam"
      }
    }
  }

  describe "GET #show" do
    it "renders json from api/users/show" do
      subject.login!(user)
      get :show, params: { id: user.id }, format: :json

      expect(response).to have_http_status(200)
      expect(response).to render_template "api/users/show"
    end
  end


  describe "GET #edit" do
    it "renders json from api/users/show" do
      subject.login!(user)
      get :edit, params: { id: user.id }, format: :json

      expect(response).to have_http_status(200)
      expect(response).to render_template "api/users/show"
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "renders json from api/users/show" do
        post :create, params: valid_params, format: :json

        expect(response).to have_http_status(200)
        expect(response).to render_template("api/users/show")
      end
    end

    context "with valid params" do
      it "renders json of the error" do
        post :create, params: invalid_params, format: :json
        parsed = JSON.parse(response.body)

        expect(response).to have_http_status(422)
        expect(parsed).to eq ["Email can't be blank", "Password is too short (minimum is 6 characters)"]
      end
    end
  end

  describe "PATCH #update" do

    before :each do
      allow(subject).to receive(:current_user).and_return(user)
    end

    context "with valid params" do
      it "returns json from api/users/show" do

        patch :update, params: { id: user.id }.merge(valid_params), format: :json

        expect(response).to have_http_status(200)
        expect(response).to render_template("api/users/show")
      end
    end

    context "with invalid params" do
      it "renders json of the error" do
        patch :update, params: { id: user.id }.merge(invalid_params), format: :json
        parsed = JSON.parse(response.body)

        expect(response).to have_http_status(422)
        expect(parsed).to eq ["Password is too short (minimum is 6 characters)"]
      end
    end
  end

  describe "DELETE #destroy" do
    before :each do
      create(:user)
    end

    context "on successful deletion" do
      it "renders json of success" do
        delete_user = User.last
        allow(subject).to receive(:current_user).and_return(delete_user)
        delete :destroy, params: { id: delete_user.id }, format: :json
        parsed = JSON.parse(response.body)

        expect(response).to have_http_status(200)
        expect(parsed).to eq ["User successfully destroyed"]
      end
    end

    context "if user is not the current_user" do
      it "renders json of failure" do
        delete_user = User.last
        subject.login!(user)
        delete :destroy, params: { id: delete_user.id }, format: :json
        parsed = JSON.parse(response.body)

        expect(response).to have_http_status(401)
        expect(parsed).to eq ["Unauthorized! Nice try! You can't do that."]
      end
    end
  end

end

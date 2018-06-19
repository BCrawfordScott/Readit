require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do

  let!(:user) { create(:user) }
  let(:good_login) {
    post :create, params: {
      user: {
        username: user.username,
        password: "waffles"
      }
    }, format: :json
  }
  let(:bad_login) {
    post :create, params: {
      user: {
        username: user.username,
        password: "notwaffles"
      }
    }, format: :json
  }

  describe "POST #create" do
    context "with valid credentials" do
      it "renders json from api/users/show" do
        good_login

        expect(response).to have_http_status(200)
        expect(response).to render_template "api/users/show"
      end

      it "logs in the user" do
        good_login

        expect(subject.current_user).to eq(user)
      end
    end

    context "with invalid credentials" do
      it "renders json of the error" do
        bad_login
        parsed = JSON.parse(response.body)

        expect(response).to have_http_status(422)
        expect(parsed).to eq ["Invalid password or username"]
      end
    end
  end

  describe "DELETE #destroy" do
    context "when a user is logged in" do
      it "logs out the current user" do
        good_login

        delete :destroy
        expect(subject.current_user.session_token).to_not eq(subject.session[:session_token])
      end
    end

    context "when no one is logged in" do
      it "renders json of the error" do
        delete :destroy, format: :json
        parsed = JSON.parse(response.body)

        expect(response).to have_http_status(422)
        expect(parsed).to eq ["No one is logged in..."]
      end
    end
  end

end

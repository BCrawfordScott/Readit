require 'rails_helper'

RSpec.describe ApplicationController, type: :controller do
  let!(:user) { create(:user) }

  describe "#login!" do
    it "sets session[:session_token] to the user's session_token" do
      subject.login!(user)

      expect(session[:session_token]).to eq user.session_token
    end
  end

  describe "#current_user" do

    before :each do
      subject.login!(user)
    end

    it "returns the logged in user" do
      expect(subject.current_user).to eq user
    end

    it "doesn't hit the database after login" do
      expect { 10.times { subject.current_user } }.to_not make_database_queries
    end

    it "returns nil if no one is logged in" do
      subject.logout!

      expect(subject.current_user).to be_nil
    end
  end

  describe "#logged_in?" do
    it "returns true if someone is logged in" do
      subject.login!(user)

      expect(subject.logged_in?).to be true
    end

    it "returns false if no one is logged in" do
      expect(subject.logged_in?).to be false
    end
  end

  describe "logout!" do
    it "sets the session cookie's session token to nil" do
      subject.login!(user)
      subject.logout!

      expect(subject.session[:session_token]).to be_nil
    end

    it "sets the current user to nil" do
      subject.login!(user)
      subject.logout!

      expect(subject.current_user).to be_nil
    end

    it "changes the user's session token" do
      subject.login!(user)
      old_token = user.session_token
      subject.logout!

      expect(old_token).to_not eq user.session_token
    end
  end

end

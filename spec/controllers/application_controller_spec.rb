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

    it "only hits the database once" do
      expect { 10.times { subject.current_user } }.to make_database_queries(count: 1)
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

end

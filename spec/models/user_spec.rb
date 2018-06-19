# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string           not null
#  session_token   :string           not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:subject) { create(:user) }

  describe "Validations" do
    it { should validate_presence_of :username }
    it { should validate_presence_of :email }
    it { should validate_presence_of :session_token }
    it { should validate_presence_of :password_digest }

    it { should validate_length_of(:password).is_at_least 6 }

    it { should validate_uniqueness_of :email }
    it { should validate_uniqueness_of :username }
    it { should validate_uniqueness_of :session_token }
  end

  describe "User::find_by_credentials" do
    context "with valid credentials" do
      it "returns the user" do
        expect(User.find_by_credentials(subject.username, "waffles")).to eq(subject)
      end
    end

    context "with invalid credentials" do
      it "returns nil" do
        expect(User.find_by_credentials(subject.username, "notmypassword")).to be_nil
      end
    end
  end

  describe "#reset_session_token!" do
    it "reset's the user's session token" do
      old_token = subject.session_token
      subject.reset_session_token!

      expect(subject.session_token).to_not eq(old_token)
    end

    it "return's the user's session token" do
      new_token = subject.reset_session_token!

      expect(new_token).to eq(subject.session_token)
    end
  end

  describe "#is_password?" do
    context "with the correct password" do
      it "returns true" do
        expect(subject.is_password?("waffles")).to be true
      end
    end

    context "with an incorrect password" do
      it "returns false" do
        expect(subject.is_password?("nopeynope")).to be false
      end
    end
  end

  describe "#password=" do
    it "sets the password digest" do
      user = User.new(username: "brian", email: "brian@brian.com")
      expect(user.password_digest).to be_nil
      user.password = "waffles"
      expect(user.password_digest).to_not be_nil
    end

    it "does not save the password to the database" do
      user = create(:user)
      expect(User.last.password).to be_nil
    end
  end
end

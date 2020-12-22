# frozen_string_literal: true

class Dock < ApplicationRecord
  has_one :boat, dependent: :nullify

  validates :name, presence: true
end

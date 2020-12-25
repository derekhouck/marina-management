# frozen_string_literal: true

class Dock < ApplicationRecord
  has_one :boat, dependent: :nullify # if dock goes away, undock boat

  validates :name, presence: true
end

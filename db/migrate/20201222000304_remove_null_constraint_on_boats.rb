class RemoveNullConstraintOnBoats < ActiveRecord::Migration[6.0]
  def change
    change_column_null :boats, :dock_id, true
  end
end

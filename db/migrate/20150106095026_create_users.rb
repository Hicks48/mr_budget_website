class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :username
      t.decimal :karma
      t.text :avatar

      t.timestamps
    end
  end
end

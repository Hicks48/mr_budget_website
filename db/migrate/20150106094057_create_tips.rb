class CreateTips < ActiveRecord::Migration
  def change
    create_table :tips do |t|
      t.text :title
      t.text :description
      t.integer :likes

      t.timestamps
    end
  end
end

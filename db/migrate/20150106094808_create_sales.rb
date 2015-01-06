class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.text :description
      t.decimal :price
      t.text :location

      t.timestamps
    end
  end
end

class ConnectTagsAndTips2 < ActiveRecord::Migration
  def change
    create_table :users_tips, id: false do |t|
      t.belongs_to :assembly, index: true
      t.belongs_to :part, index: true
    end
  end
end

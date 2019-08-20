class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :year
      t.integer :month
      t.integer :day
      t.integer :time

      t.timestamps
    end
  end
end

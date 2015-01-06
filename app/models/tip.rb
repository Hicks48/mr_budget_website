class Tip < ActiveRecord::Base
  belongs_to :user

  def self.get_latest_tips(options)
    return Tip.order(:created_at).limit(options['amount'])
  end

  def self.get_best_tips(options)
    tips_from_correct_time = Tip.where("created_at >= ? AND created_at <= ?",
     options['start_datetime'], options['end_datetime'])

    # Select amount of best tips
    best_tips = []
    tips_from_correct_time.each do |tip|
      # Have amount of tips. Replace tip with lowest score with new tip
      # if new tip has better score
      if(best_tips.count >= options['amount'])
        best_tips.push(tip) if self.get_score(tip) > self.get_score(best_tips.min { |a, b| self.get_score(a) < self.get_score(b) })

      # If not amount tips add tip to best
      else
        best_tips.push(tip)
      end
    end

    return best_tips
  end

  private

  def self.get_score(tip)
    if tip.likes.nil?
      return 0
    else
      return tip.likes
    end
  end
end

class Visitation < ApplicationRecord
	belongs_to :user
	
	# validation of date
	validates :date, presence: true
		
	


	# validation of time
	validates :time, presence: true	
	
	

	#validation of visitants_amout
	validates :visitants_amount, presence: true

	validate :validate_visitants_amount

	def validate_visitants_amount
		if (self.visitants_amount > 100)
			errors.add(:visitants_amount, "A quantidade máxima por visitação é de 100 pessoas")
		elsif (self.visitants_amount < 1)
			errors.add(:visitants_amount, "A quantidade de pessoas não pode ser negativa")
		end
	end



	#status
	def set_status_default
		self.status = "Aguardando confirmacao"
	end	

	def canceled_by_employee
		self.status = "Cancelado por funcionario"
	end

	def canceled_by_user
		self.status = "Cancelado pelo usuario"
	end

	def refused_by_employee
		self.status = "Recusado por funcionario"
	end

	def accepted_by_employee
		self.status = "Agendado"
	end




	# validation of description
	validates :description, presence: true, length: { minimum: 5, maximum: 300 }
end

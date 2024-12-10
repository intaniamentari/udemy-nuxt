import { createClient } from "@supabase/supabase-js"
import { faker } from '@faker-js/faker'
import { expenseCategory, incomeCategory, savingCategory, investmentCategory } from "../app/constant.js"
import 'dotenv/config'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY, {
  auth: { persistSession: false }
})
const categories = ['Food', 'Housing', 'Car', 'Entertainment']

async function seedTransactions() {
  // Delete existing data
  const { error: deleteError } = await supabase.from('transactions')
    .delete().gte('id', 0)

  if (deleteError) {
    console.error('Error deleting existing data:', deleteError)
    return
  }

  let transactions = []

  for (let year = new Date().getFullYear(); year > new Date().getFullYear() - 2; year--) {
    for (let i = 0; i < 10; i++) {
      const date = new Date(
        year,
        faker.number.int({ min: 0, max: 11 }),
        faker.number.int({ min: 1, max: 28 })
      )

      let type, category
      const typeBias = Math.random()

      if (typeBias < 0.55) {
        type = 'Expense'
		let randomInt = Math.floor(Math.random() * 11);
        category = expenseCategory[randomInt] // Category only for 'Expense'
      } else if (typeBias < 0.60) {
        type = 'Income'
		let randomInt = Math.floor(Math.random() * 4);
		category = incomeCategory[randomInt]
      } else if (typeBias < 0.77) {
		type = 'Saving'
		let randomInt = Math.floor(Math.random() * 7);
		category = savingCategory[randomInt]
	  } else {
        type = 'Investment'
		let randomInt = Math.floor(Math.random() * 5);
		category = investmentCategory[randomInt]
      }

      let amount
      switch (type) {
        case 'Income':
          amount = faker.number.int({ min: 20000, max: 500000 })
          break
        case 'Expense':
          amount = faker.number.int({ min: 10000, max: 91000 })
          break
        case 'Saving':
			amount = faker.number.int({min: 50000, max: 100000})
			break
        case 'Investment':
          amount = faker.number.int({ min: 50000, max: 100000 })
          break
        default:
          amount = 0
      }

      transactions.push({
        created_at: date,
        amount,
        type,
        description: faker.lorem.sentence(),
        // category: type === 'Expense' ? category : null // Category only for 'Expense'
        category: category
      })
    }
  }

  const { error: insertError } = await supabase.from('transactions').upsert(transactions)

  if (insertError) {
    console.error('Error inserting data:', insertError)
  } else {
    console.log('Data inserted successfully.')
  }
}

seedTransactions().catch(console.error)
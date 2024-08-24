import { BillCard } from '@/components/ui/common'
import { Button } from '@/components/ui/core'
import { ROUTES } from '@/constants'
import { Link } from '@/libs'

export const Home = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-y-4">
        <BillCard venue="Meghnas" cost={8400} date={new Date('2024-08-17T03:24:00')} people={4} />
        <BillCard venue="Meghnas" cost={8400} date={new Date()} people={4} />
      </div>

      <Link to={ROUTES.NEW_EXPENSE} className="w-full no-underline">
        <Button fullWidth size="lg">
          Add Expense
        </Button>
      </Link>
    </div>
  )
}

import { useAuth } from '../lib/auth'
import EmptyState from '../components/EmptyState'
import DashboardShell from '../components/DashboardShell'
import SiteTableSkeleton from '../components/SiteTableSkeleton'

export default function Dasboard() {
    const auth = useAuth()

    if (!auth.user) {
        return <DashboardShell>
            < SiteTableSkeleton />
        </DashboardShell>
    }


    return <DashboardShell>
        <EmptyState />
    </DashboardShell>
}
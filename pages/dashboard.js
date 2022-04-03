import { useAuth } from '../lib/auth'
import useSWR from 'swr'
import EmptyState from '../components/EmptyState'
import DashboardShell from '../components/DashboardShell'
import SiteTableSkeleton from '../components/SiteTableSkeleton'
import fetcher from '../utils/fetcher'
import SiteTable from '../components/SiteTable'

export default function Dasboard() {
    const auth = useAuth()
    const { data } = useSWR('/api/sites', fetcher)

    console.log(data)

    if (!data) {
        return <DashboardShell>
            < SiteTableSkeleton />
        </DashboardShell>
    }

    return <DashboardShell>
        {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
}
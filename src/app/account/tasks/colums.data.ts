import dayjs, { type Dayjs } from 'dayjs'
import 'dayjs/locale/ru'

import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import IsSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)
dayjs.extend(IsSameOrBefore)

export const FILTERS: Record<string, Dayjs> = {
    today: dayjs().startOf('day'),
    tomorrow: dayjs().add(1, 'day').startOf('day'),
    'on-this-week': dayjs().day(5),
    'on-next-week': dayjs().add(1, 'week').startOf('day'),
    later: dayjs().add(2, 'week').startOf('day')
}

export const COLUMNS = [
    {
        label: 'Сегодня',
        value: 'today'
    },
    {
        label: 'Завтра',
        value: 'tomorrow'
    },
    {
        label: 'На этой неделе',
        value: 'on-this-week'
    },
    {
        label: 'На следующей неделе',
        value: 'on-next-week'
    },
    {
        label: 'Позже',
        value: 'later'
    },
    {
        label: 'Выполнено',
        value: 'completed'
    }
]

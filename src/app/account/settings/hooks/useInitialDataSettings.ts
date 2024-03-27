import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { TypeSettingsForm } from '@/types/auth.types'
import useSettings from '@/hooks/useSettings'


export function useInitialDataSettings(reset: UseFormReset<TypeSettingsForm>) {
    const { data, isSuccess } = useSettings()

    useEffect(() => {
        if (isSuccess && data) {
            reset({
                intervalsCount: data.intervalsCount,
                workInterval: data.workInterval,
                breakInterval: data.breakInterval
            })
        }
    }, [isSuccess])
}

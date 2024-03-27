import useSettings from "@/hooks/useSettings"

export default function useLoadSettings() {
    const { data } = useSettings()

    const workInterval = data?.workInterval ?? 45
    const breakInterval = data?.workInterval ?? 15

    return { workInterval, breakInterval }
}

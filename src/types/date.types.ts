export interface IDatePicker {
    onChange: (value: string) => void
    value: string
    position?: 'left' | 'right'
}
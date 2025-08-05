# MUI DateRange Picker

A React date range picker implementation using @mui (v7).

<a href='https://www.npmjs.com/package/date-range-picker-mui'>
    <img src='https://img.shields.io/npm/v/date-range-picker-mui.svg' alt='Latest npm version'>
</a>

## Preview

![Screenshot](/screenshot.png?raw=true "Screenshot")

## Usage

```bash
npm install date-range-picker-mui --save

# or with yarn
yarn add date-range-picker-mui
```

## Basic example
```tsx
import React from "react";
import { DateRangePicker, DateRange } from "date-range-picker-mui";

type Props = {}

const App: React.FunctionComponent<Props> = props => {
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState<DateRange>({});

  const toggle = () => setOpen(!open);

  return (
    <DateRangePicker
      open={open}
      toggle={toggle}
      onChange={(range) => setDateRange(range)}
    />
  );
}

export default App;
```

## Types
```ts
interface DateRange {
    startDate?: Date,
    endDate?: Date
}

interface DefinedRange {
    label: string,
    startDate: Date,
    endDate: Date
}
```

## Props

| Name                  | Type                      | Required   | Default value     | Description                                                           |
|:----------------------|:--------------------------|:-----------|:------------------|:----------------------------------------------------------------------|
| `onChange`            | `(DateRange) => void`     | _required_ | -                 | handler function for providing selected date range                    |
| `toggle`              | `() => void`              | _required_ | -                 | function to show / hide the DateRangePicker                           |
| `initialDateRange`    | `DateRange`               | _optional_ | `{}`              | initially selected date range                                         |
| `minDate`             | `Date` or `string`        | _optional_ | 10 years ago      | min date allowed in range                                             |
| `maxDate`             | `Date` or `string`        | _optional_ | 10 years from now | max date allowed in range                                             |
| `definedRanges`       | `DefinedRange[]`          | _optional_ | -                 | custom defined ranges to show in the list                             |
| `closeOnClickOutside` | `boolean`                 | _optional_ | `true`            | defines if DateRangePicker will be closed when clicking outside of it |
| `wrapperClassName`    | `object`                  | _optional_ | `undefined`       | defines additional wrapper style classes                              |
| `locale`              | `Locale`  (from date-dns) | _optional_ | `undefined`       | defines locale to use (from date-fns package)                         |

## Made possible by

<a href="https://github.com/reschandreas/date-range-picker-mui/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=reschandreas/date-range-picker-mui" alt="contributors"/>
</a>

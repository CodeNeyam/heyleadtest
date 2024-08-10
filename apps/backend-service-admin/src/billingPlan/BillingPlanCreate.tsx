import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
} from "react-admin";

export const BillingPlanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="onHold" source="onHold" />
        <NumberInput label="planFees" source="planFees" />
        <SelectInput
          source="planType"
          label="planType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="users" source="users" />
        <NumberInput label="withdraw" source="withdraw" />
      </SimpleForm>
    </Create>
  );
};

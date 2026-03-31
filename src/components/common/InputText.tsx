import type {ForwardedRef} from "react";
import {styled} from "styled-components";

interface Props {
    placeholder?: string;
}

export default function InputText = React.forwardRef<HTMLInputElement, Props>(
    ({ placeholder }, ref) => {
        return <InputTextStyle placeholder={placeholder} ref={ref} />
    }
)

const InputTextStyle = styled.input.attrs({type: "text"})`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({theme}) => theme.color.border}
  border: ${({theme}) => theme.borderRadius.default}
  font-size: 1rem;
  line-height: 1.5;
  color: ${({theme}) => theme.color.text};
`

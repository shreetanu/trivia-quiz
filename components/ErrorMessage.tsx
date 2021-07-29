import { ReactNode } from "react";
import { Alert, AlertTitle } from '@material-ui/lab';
import { red } from "@material-ui/core/colors";

interface IErrorMessageProps {
	children?: ReactNode;
}
// style={{
// 	width: "100%",
// 	padding: 10,
// 	marginBottom: 10,
// 	borderRadius: 4,
// 	backgroundColor: "red",
// 	textAlign: "center",
// 	color: "white",
// 	textTransform: "capitalize",
// }}>
const ErrorMessage = ({ children }: IErrorMessageProps) => {
	return (
		<Alert severity='error' >
		<AlertTitle>Error</AlertTitle>
			
			<strong>{children}</strong>
		</Alert>
	);
};

export default ErrorMessage;

import { ReactNode } from "react";
interface IErrorMessageProps {
	children?: ReactNode;
}
const ErrorMessage = ({ children }: IErrorMessageProps) => {
	return (
		<div
			style={{
				width: "100%",
				padding: 10,
				marginBottom: 10,
				borderRadius: 4,
				backgroundColor: "red",
				textAlign: "center",
				color: "white",
				textTransform: "capitalize",
			}}>
			{children}
		</div>
	);
};

export default ErrorMessage;
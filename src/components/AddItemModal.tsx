import { Button, InputAdornment, Modal, Typography } from "@material-ui/core";
import React from "react";
import { Item } from "../models";
import { useSetRecoilState } from "recoil";
import { itemsListState } from "../atoms/Items";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
	Form,
	FormInput,
	InputWrapper,
	StyledModal
} from "./styled/StyledFormComponents";

interface AddItemModalProps {
	open: boolean;
	handleClose: () => void;
}

export const AddItemModal: React.FC<AddItemModalProps> = ({
	open,
	handleClose
}) => {
	const setItemsList = useSetRecoilState(itemsListState);
	const {
		values,
		handleSubmit,
		handleChange,
		touched,
		handleBlur,
		errors
	} = useFormik({
		initialValues: {
			itemName: "",
			onlineStore: "",
			price: 0,
			estDate: ""
		},
		validationSchema: Yup.object({
			itemName: Yup.string().required("Item name is required"),
			onlineStore: Yup.string().required("Store name is required"),
			price: Yup.number().required("Please enter item's price"),
			estDate: Yup.date().required("Please enter a estimated delivery date")
		}),
		onSubmit: ({ itemName, onlineStore, price, estDate }) => {
			console.log("form submitted");
			console.log(itemName, onlineStore, price, estDate);
			const estimatedDelivery = estDate === "" ? new Date() : new Date(estDate);
			addItemToList({ itemName, onlineStore, price, estimatedDelivery });
			handleClose();
		}
	});

	function addItemToList(item: Item) {
		setItemsList(prevItems => [...prevItems, item]);
	}

	return (
		<Modal open={open} onClose={handleClose}>
			<StyledModal>
				<Typography variant="h5">Add Item</Typography>
				<Form onSubmit={handleSubmit}>
					<InputWrapper>
						<FormInput
							label="Item name"
							name="itemName"
							value={values.itemName}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Samsung Galaxy Note 10"
							helperText={
								touched.itemName && errors.itemName ? errors.itemName : " "
							}
							error={touched.itemName && errors.itemName ? true : false}
						/>
					</InputWrapper>
					<InputWrapper>
						<FormInput
							label="Store name"
							name="onlineStore"
							value={values.onlineStore}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Samsung store"
							helperText={
								touched.onlineStore && errors.onlineStore
									? errors.onlineStore
									: " "
							}
							error={touched.onlineStore && errors.onlineStore ? true : false}
						/>
					</InputWrapper>
					<InputWrapper>
						<FormInput
							label="Price"
							name="price"
							type="number"
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="49.90"
							helperText={touched.price && errors.price ? errors.price : " "}
							error={touched.price && errors.price ? true : false}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">$</InputAdornment>
								)
							}}
						/>
					</InputWrapper>
					<InputWrapper>
						<FormInput
							label="Estimated delivery date"
							name="estDate"
							type="date"
							value={values.estDate}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="dd/mm/yyyy"
							helperText={
								touched.estDate && errors.estDate ? errors.estDate : " "
							}
							error={touched.estDate && errors.estDate ? true : false}
							InputLabelProps={{
								shrink: true
							}}
						/>
					</InputWrapper>
					<div>
						<Button type="submit" variant="contained" color="primary">
							Submit
						</Button>
					</div>
				</Form>
			</StyledModal>
		</Modal>
	);
};

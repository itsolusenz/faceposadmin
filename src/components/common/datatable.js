import React, { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/scss/react-table.css"
import axios from 'axios';
import Moment from 'moment';
import { decode as base64_decode, encode as base64_encode } from 'base-64';

import {
	Button,
	Form,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "reactstrap";

const Datatable = ({ myData, myClass, multiSelectOption, pagination, page }) => {
	const [open, setOpen] = useState(false);
	const [checkedValues, setCheckedValues] = useState([]);
	const [data, setData] = useState(myData);
	const [userdata, setUsers1] = useState([]);
	const [getUsemail, setUsemail] = useState([]);


	const selectRow = (e, i) => {
		if (!e.target.checked) {
			setCheckedValues(checkedValues.filter((item, j) => i !== item));
		} else {
			checkedValues.push(i);
			setCheckedValues(checkedValues);
		}
	};


	const handleRemoveRow = () => {
		const updatedData = myData.filter(function (el) {
			return checkedValues.indexOf(el.id) < 0;
		});
		setData([...updatedData]);

	}

	const renderEditable = (cellInfo) => {
		return (
			<div
				style={{ backgroundColor: "#557191" }}
				contentEditable
				suppressContentEditableWarning
				onBlur={(e) => {
					data[cellInfo.index][cellInfo.index.id] = e.target.innerHTML;
					setData({ myData: data });
				}}
				dangerouslySetInnerHTML={{
					__html: myData[cellInfo.index][cellInfo.index.id],
				}}
			/>
		);
	};

	/*	const handleDelete = (index) => {
			if (window.confirm("Are you sure you wish to delete this item?")) {
				const del = data;
				del.splice(index, 1);
				setData([...del]);
			}
			toast.success("Successfully Deleted !");
		};*/

	const Getuserstatus = (index) => {
		const stat = '';
		console.log('index', index)
		setUsers1('');
		fetch('https://api.laabamone.com/api/v1/GetUserByID?ID=' + index)
			.then(response => response.json())
			.then(json => setUsers1(json))
		console.log('userdata', userdata.UserNumber);
		return userdata.UserNumber;
		return false;

	}
	const handleDelete = (index) => {
		if (window.confirm("Are you sure you wish to delete this item?")) {
			const del = data;
			del.splice(index, 1);
			setData([...del]);
		}


		const response = axios.get(`https://api.laabamone.com/api/v1/DeleteUserByID?ID=${index}`);
		console.log('dele', response.data);
		toast.success("Successfully Deleted.. !");







	}
	const handleDeleteemp = (index) => {
		if (window.confirm("Are you sure you wish to delete this item?")) {
			const del = data;
			del.splice(index, 1);
			setData([...del]);
		}

		const response = axios.get(`https://api.laabamone.com/api/v1/DeleteEmployerByID?ID=${index}`);
		console.log('dele', response.data);
		window.location.reload();

		toast.success("Successfully Deleted.. !");







	}
	const handleDeletehelper = (index) => {
		if (window.confirm("Are you sure you wish to delete this Helper?")) {
			const del = data;
			del.splice(index, 1);
			setData([...del]);
		}

		const response = axios.get(`https://api.laabamone.com/api/v1/DeleteHelperByID?HelperID=${index}`);
		console.log('dele', response);
		window.location.reload();

		toast.success("Successfully Deleted.. !");







	}
	const getUserNum = (index) => {

		//const response =await axios.get(`https://api.laabamone.com/api/v1/GetUserByID?ID=68`);
		//console.log('delerr',response.data.Email);
		//setUsemail(response.data.Email);
		//	console.log('delerr',json);
		return index;
		//	return response.data.Email;

	};

	const onOpenModal = () => {
		setOpen(true);
	};

	const onCloseModal = () => {
		setOpen(false);
	};

	const Capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
	const Getprofileimg = (a) => {
		//alert(a);
		let promig;
		if (a != '' && a != 'null' && a != null && a != undefined) {
			promig = base64_decode(a)
		}
		else {
			promig = `${process.env.PUBLIC_URL}/profileimg.png`;
		}
		return promig;
	}

	/*************************************************************************************** */
	let editurl = '';
	if (page == 'package_list') {
		editurl = '/accounts/Admin/edit/';
	}
	else if (page == 'admin_page') {
		editurl = '/accounts/Admin/edit/';
	}
	else if (page == 'helper_page') {
		editurl = '/accounts/Helper/edit/';
	}
	else if (page == 'employer_page') {
		editurl = '/accounts/employer/edit/';
	}
	else if (page == 'empjob_page') {
		editurl = '/accounts/employer/jobpost/edit/';
	}
	else if (page == 'transaction_emplist') {
		editurl = '/transaction/employer/edit/';
	}
	else if (page == 'customerlist') {
		editurl = '/customerview/';
	}

	else {
		editurl = '/accounts/employer/edit/';
	}

	const columns = [];

	for (var key in myData[0]) {
		let editable = renderEditable;
		let width = '10%';
		let align = "center";
		let contition = '';

		if (page == 'customerlist') {
			contition = (key != "id" && key != 'selectedbankcount' && key != 'gender' && key != 'mobile' && key != 'selectedbanks')

		}

		else if (page == 'helper_page') {
			contition = (key == "Name" || key == "PassportNo" || key == "Nationality" || key == "Email")

		}
		else if (page == 'employer_page') {

			contition = (key != "$id" && key != "Dob" && key != "Salutation" && key != "EmployerId" && key != "UserId" && key != 'Activeness' && key != "Status" && key != 'Gender' && key != "Address1" && key != "Address2" && key != "City" && key != "PostalCode" && key != "Country" && key != "Settings" && key != "Feedback")


		}
		else if (page == 'empjob_page') {

			contition = (key != "$id" && key != "Nationality" && key != "Religion" && key != "Dob" && key != "Salutation" && key != "EmployerId" && key != "JobPostId" && key != 'JobScope' && key != "CookingSkill" && key != 'AdditionalRequirements' && key != "Accomodation" && key != "SpokenLanguage" && key != "City" && key != "Housing" && key != "Elder" && key != "Adult" && key != "Teen" && key != "Child" && key != "Baby")


		}
		else {
			contition = (key != "$id")
		}

		if (contition) {

			if (key === "image") {
				editable = null;
			}
			if (key === "status") {
				editable = null;

			}

			if (key === "profileimage") {
				editable = null;
			}
			if (key === "sno") {
				width = '5%';
				align = "left";
			}
			if (key === "profileimage") {


				width = '15%';
				align = "left";

			}
			if (key === "name") {
				width = '20%';
				align = "left";
			}
			if (key === "email") {
				width = '30%';
				align = "left";
			}

			if (key === "mobile") {
				width = '20%';
				align = "left";
			}
			if (page == 'customerlist') {

				if (key === "profileimage") {
					columns.push({
						name: <b>Profile Image</b>,
						id: "active",
						accessor: (str) => "active",
						cell: (row, index) => (
							<div>
								<img src={`${Getprofileimg(`${row.profileimage}`)}`} style={{ height: 45, width: 45, borderRadius: 50 }} />

							</div>


						),
						style: {

							textAlign: "center",
						},
						sortable: false,
						maxWidth: '20%',
					});
				}
				else {
					columns.push({
						name: <b>{Capitalize(key.toString())}</b>,
						header: <b>{Capitalize(key.toString())}</b>,
						selector: key,
						Cell: editable,
						style: {
							textAlign: align,
						},
						sortable: true,
						maxWidth: width,
					});

				}

			}

			else {
				columns.push({
					name: <b>{Capitalize(key.toString())}</b>,
					header: <b>{Capitalize(key.toString())}</b>,
					selector: key,
					Cell: editable,
					style: {
						textAlign: align,
					},
					sortable: true,
					maxWidth: width,
				});
			}


		}
	}

	if (multiSelectOption === true) {
		/*	columns.push({
				name: (
					<button
						className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
						onClick={(e) => {
							if (window.confirm("Are you sure you wish to delete this item?"))
								handleRemoveRow();
						}}
					>
						Delete
					</button>
				),
				id: "delete",
				accessor: (str) => "delete",
				cell: (row) => (
					<div>
						<span>
							<input
								type="checkbox"
								name={row.Id}
								defaultChecked={checkedValues.includes(row.Id)}
								onChange={(e) => selectRow(e, row.Id)}
							/>
						</span>
						<a href={`${editurl}${row.Id}`}><span>
							<i
	
								className="fa fa-pencil"
								style={{
									width: 35,
									fontSize: 20,
									padding: 11,
									color: "rgb(40, 167, 69)",
								}}
							></i>
	
						</span></a>
					</div>
				),
				style: {
					textAlign: "center",
				},
				sortable: false,
				maxWidth: '20%',
			});*/
	} else {

		if (page == 'customerlist') {


			columns.push({
				name: <b>Account Information</b>,
				id: "active",
				accessor: (str) => "active",
				cell: (row, index) => (
					<div>
						{row.selectedbankcount != '' ?
							<span className="badge badge-pill badge-primary pull-right notification-badge">{(`${row.selectedbankcount} Account`)}</span>

							:
							''
						}

					</div>
				),
				style: {
					textAlign: "center",
				},
				sortable: false,
				maxWidth: '10%',
			});

			columns.push({
				name: <b>Action</b>,
				id: "delete",
				accessor: (str) => "delete",
				cell: (row, index) => (
					<div>
						<a href={`${editurl}${row.id}`}><span>
							<i

								className="fa fa-eye"
								style={{
									width: 35,
									fontSize: 20,
									padding: 11,
									color: "rgb(40, 167, 69)",
								}}
							></i>

						</span></a>
						{/*<span onClick={() => handleDelete(row.Id)}>
							<i
								className="fa fa-trash"
								style={{
									width: 35,
									fontSize: 20,
									padding: 11,
									color: "#e4566e",
								}}
							></i>
							</span>*/}


					</div>
				),
				style: {
					textAlign: "center",
				},
				sortable: false,
				maxWidth: '5%',
			});

		}



	}
	return (
		<div>
			<Fragment>
				<DataTable
					data={data}
					columns={columns}
					className={myClass}
					pagination={pagination}
					striped={true}
					center={true}

				/>

				<ToastContainer />
			</Fragment>
		</div>
	);
};

export default Datatable;

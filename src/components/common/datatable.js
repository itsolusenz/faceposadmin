import React, { Fragment, useState } from "react";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../assets/scss/react-table.css"
import axios from 'axios';
import Moment from 'moment';
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
	else {
		editurl = '/accounts/employer/edit/';
	}

	const columns = [];

	for (var key in myData[0]) {
		let editable = renderEditable;
		let width = '10%';
		let align = "center";
		let contition = '';
		if (page == 'admin_page') {
			contition = (key != "$id" && key != "Id" && key != "RoleId" && key != 'Activeness' && key != "Status" && key != "Password" && key != "SourceCountry" && key != "NotificationId" && key != "Otp")

		}
		if (page == 'helper_page') {
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
			if (key === "avtar") {
				editable = null;
			}
			if (key === "vendor") {
				editable = null;
			}
			if (key === "order_status") {
				editable = null;
			}

			if (key === "title") {
				width = '50%';
				align = "left";
			}

			if (key === "Id") {
				width = '5%';
				align = "left";
			}
			if (key === "Email") {
				width = '30%';
				align = "left";
			}
			if (key === "UserNumber") {
				width = '15%';
				align = "left";
			}

			if (key === "Status") {

				editable = 'Posted';
				width = '10%';
				align = "left";

			}

			if (key === "ContactNumber") {
				width = '15%';
				align = "left";
			}
			if (key === "FullName") {
				width = '15%';
				align = "left";
			}
			if (key === "Occupation") {
				width = '25%';
				align = "left";
			}
			if (key === "PreferredContact") {
				width = '20%';
				align = "left";
			}
			if (key === "Name") {
				width = '10%';
				align = "left";
			}
			if (key === "PassportNo") {
				width = '20%';
				align = "left";
			}
			if (key === "Nationality") {
				width = '10%';
				align = "left";
			}

			if (page == 'helper_page') {

				if (key === "Name") {
					columns.push({
						name: <b>Helper Name </b>,
						id: "active",
						accessor: (str) => "active",
						cell: (row, index) => (
							<div>
								{row.Name.split(" ")[0] == '1' ? 'MR.'
									: row.Name.split(" ")[0] == '2' ? 'MS.'
										: row.Name.split(" ")[0] == '3' ? 'MRS.'
											: row.Name.split(" ")[0] == '4' ? 'DR.' : ''


								}
								{row.Name.split(" ")[1]} {row.Name.split(" ")[2]}
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
		columns.push({
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
		});
	} else {

		if (page == 'admin_page') {

			columns.push({
				name: <b>Activeness</b>,
				id: "active",
				accessor: (str) => "active",
				cell: (row, index) => (
					<div>
						{row.Activeness != '' ?
							<span className="badge badge-pill badge-primary pull-right notification-badge">{Moment(`${row.Activeness}`).format('DD-MM-YYYY H:MM:SS')}</span>

							:
							''
						}

					</div>
				),
				style: {
					textAlign: "center",
				},
				sortable: false,
				maxWidth: '20%',
			});
			columns.push({
				name: <b>Status</b>,
				id: "status",
				accessor: (str) => "status",
				cell: (row, index) => (
					<div>
						{row.Status == '1' ?

							<span className="badge badge-pill badge-primary pull-right notification-badge">Posted</span>
							: row.Status == '2' ?
								<span className="badge badge-pill badge-warning pull-right notification-badge">Pending</span>
								:
								row.Status == '3' ?
									<span className="badge badge-pill badge-danger pull-right notification-badge">Deleted</span>
									:
									row.Status == '4' ?
										<span className="badge badge-pill badge-info pull-right notification-badge">Suspended</span>
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
						<span onClick={() => handleDelete(row.Id)}>
							<i
								className="fa fa-trash"
								style={{
									width: 35,
									fontSize: 20,
									padding: 11,
									color: "#e4566e",
								}}
							></i>
						</span>


					</div>
				),
				style: {
					textAlign: "center",
				},
				sortable: false,
				maxWidth: '15%',
			});

		}
		if (page == 'employer_page') {


			columns.push({
				name: <b>Status</b>,
				id: "active",
				accessor: (str) => "active",
				cell: (row, index) => (
					<div>
						{row.UserId != '' ?
							<>


								<span className="badge badge-pill badge-primary pull-right notification-badge">Posted</span>

							</>
							:
							''
						}

					</div>


				),
				style: {

					textAlign: "center",
				},
				sortable: false,
				maxWidth: '20%',
			});


			columns.push({
				name: <b>DOB</b>,
				id: "active",
				accessor: (str) => "active",
				cell: (row, index) => (
					<div>
						{row.Activeness != '' ?
							<span className="badge badge-pill badge-primary pull-right notification-badge">{Moment(`${row.Dob}`).format('DD-MM-YYYY')}</span>

							:
							''
						}

					</div>
				),
				style: {
					textAlign: "center",
				},
				sortable: false,
				maxWidth: '20%',
			});
			columns.push({
				name: <b>Action</b>,
				id: "delete",
				accessor: (str) => "delete",
				cell: (row, index) => (
					<div>
						<a href={`${editurl}${row.EmployerId}`}><span>
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
						<span onClick={() => handleDeleteemp(row.EmployerId)}>
							<i
								className="fa fa-trash"
								style={{
									width: 35,
									fontSize: 20,
									padding: 11,
									color: "#e4566e",
								}}
							></i>
						</span>


					</div>
				),
				style: {
					textAlign: "center",
				},
				sortable: false,
				maxWidth: '15%',
			});

		}
		if (page == 'helper_page') {





			columns.push({
				name: <b>Supplier</b>,
				id: "active",
				accessor: (str) => "active",
				cell: (row, index) => (
					<div>


					</div>


				),
				style: {

					textAlign: "center",
				},
				sortable: false,
				maxWidth: '5%',
			});
			columns.push({
				name: <b>Availablity</b>,
				id: "active",
				accessor: (str) => "active",
				cell: (row, index) =>

				(
					<div>


					</div>


				),
				style: {

					textAlign: "center",
				},
				sortable: false,
				maxWidth: '5%',
			});
			columns.push({
				name: <b>Status</b>,
				id: "active",
				accessor: (str) => "active",
				cell: (row, index) =>

				(
					<div>


					</div>


				),
				style: {

					textAlign: "center",
				},
				sortable: false,
				maxWidth: '5%',
			});



			columns.push({
				name: <b>Action</b>,
				id: "delete",
				accessor: (str) => "delete",
				cell: (row, index) => (
					<div>
						<span onClick={() => handleDeletehelper(row.HelperID)}>
							<i
								className="fa fa-trash"
								style={{
									width: 35,
									fontSize: 20,
									padding: 11,
									color: "#e4566e",
								}}
							></i>
						</span>

						<a href={`${editurl}${row.HelperID}/${row.ResumeID}/`}><span>
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
				maxWidth: '15%',
			});

		}
		if (page == 'empjob_page') {






			columns.push({
				name: <b>Action</b>,
				id: "delete",
				accessor: (str) => "delete",
				cell: (row, index) => (
					<div>
						<span onClick={() => handleDeleteemp(row.JobPostId)}>
							<i
								className="fa fa-trash"
								style={{
									width: 35,
									fontSize: 20,
									padding: 11,
									color: "#e4566e",
								}}
							></i>
						</span>

						<a href={`${editurl}${row.JobPostId}`}><span>
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
				maxWidth: '15%',
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

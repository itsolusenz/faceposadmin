import React, { useState, useEffect, Fragment } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Card, CardBody, CardHeader, Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import MyDropzone from "../../common/dropzone";
import { useParams } from "react-router-dom";
import axios from 'axios';
import jsCookie from 'js-cookie';
//import CryptoJS from 'crypto-js';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
//import LocalizationProvider from '@mui/lab/LocalizationProvider'; 
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Moment from 'moment';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ExternalLink } from "react-feather";
const TabsetUser = () => {
	const { helperid, resumeid } = useParams();
	console.log('idd', helperid, resumeid)
	const [value, setValue] = React.useState(null);
	const [passvalue, setpassValue] = React.useState(null);
	const [startdatevalue, setstartdateValue] = React.useState(null);
	const [getHelperDet, setHelperdetails] = useState([]);
	const [getCountryPrefertowork, setCountryPrefertowork] = useState([]);
	const [getCurrentlyLocated, setCurrentlyLocated] = useState([]);


	const [country, setCountry] = useState([]);
	const [user, setUsers] = useState([]);
	const [getuser, setUser] = useState([]);
	//const [getuser, setEmp] = useState([]);
	const [helper, setHelper] = useState([]);
	const [err, setErr] = useState([]);
	const [suc, setSuc] = useState([]);
	const [gifbutto, setGifbutt] = useState('');

	const [InputSalutation, setInputSalutation] = useState([]);
	const [Inputname, setInputname] = useState([]);
	const [InputNationality, setInputNationality] = useState([]);
	const [InputGender, setInputGender] = useState([]);
	const [InputReligion, setInputReligion] = useState([]);
	const [InputCurrentLocation, setInputCurrentLocation] = useState([]);
	const [InputHeight, setInputHeight] = useState([]);
	const [InputWeight, setInputWeight] = useState([]);
	const [InputPlaceofBirth, setInputPlaceofBirth] = useState([]);
	const [useridadd, setUSerid] = useState([]);
	const [inputpass, setInputpass] = useState([]);
	const [InputPassportNo, setInputPassportNo] = useState([]);
	const [InputPassportExpiryDate, setInputPassportExpiryDate] = useState([]);
	const [InputNameofAirportRepatriated, setInputNameofAirportRepatriated] = useState([]);
	const [InputHomeAddress, setInputHomeAddress] = useState([]);
	const [InputHomeAddress2, setInputHomeAddress2] = useState([]);
	const [InputHomeCity, setInputHomeCity] = useState([]);
	const [InputHomeState, setInputHomeState] = useState([]);
	const [InputHomeCountry, setInputHomeCountry] = useState([]);
	const [InputHomePostal, setInputHomePostal] = useState([]);
	const [InputNoOfChildren, setInputNoOfChildren] = useState([]);
	const [InputAgeOfChildren, setInputAgeOfChildren] = useState([]);
	const [InputNoOfSibilings, setInputNoOfSibilings] = useState([]);
	const [InputEducationLevel, setInputEducationLevel] = useState([]);
	const [InputMaritialStatus, setInputMaritialStatus] = useState([]);
	const [InputFoodHandlingPreference, setInputFoodHandlingPreference] = useState([]);
	const [InputLanguage, setInputLanguage] = useState([]);
	const [InputCooking, setInputCooking] = useState([]);
	const [InputMainskills, setInputMainskills] = useState([]);
	const [InputSpecialSkills, setInputSpecialSkills] = useState([]);
	const [InputPersonality, setInputPersonality] = useState([]);
	const [InputStartDate, setInputStartDate] = useState([]);
	const [InputSalary, setInputSalary] = useState([]);
	const [InputAccommodation, setInputAccommodation] = useState([]);
	const [InputOffDay, setInputOffDay] = useState([]);
	const [InputOthers, setInputOthers] = useState([]);
	const [InputDietaryPreference, setInputDietaryPreference] = useState([]);
	const [InputDescription, setInputDescription] = useState([]);



	const [inputmobile, setInputmobile] = useState([]);
	const [inputoccu, setInputoccu] = useState([]);
	const [inputdob, setInputdob] = useState([]);


	const [checkedAllergies, setCheckedAllergies] = React.useState(false);
	const [checkedMentalIllness, setCheckedMentalIllness] = React.useState(false);
	const [checkedEpilepsy, setCheckedEpilepsy] = React.useState(false);
	const [checkedAsthma, setCheckedAsthma] = React.useState(false);
	const [checkedDiabetes, setCheckedDiabetes] = React.useState(false);
	const [checkedHypertension, setCheckedHypertension] = React.useState(false);
	const [checkedTuberculosis, setCheckedTuberculosis] = React.useState(false);
	const [checkedHeartdisease, setCheckedHeartdisease] = React.useState(false);
	const [checkedMalaria, setCheckedMalaria] = React.useState(false);
	const [checkedOperations, setCheckedOperations] = React.useState(false);
	const [checkedPhysicaldisablilities, setCheckedPhysicaldisablilities] = React.useState(false);


	//const [getCountryPrefertowork, setCountryPrefertowork] = useState([]);
	// const [getCurrentlyLocated, setCurrentlyLocated] = useState([]); 	
	const [getCountryeverworked, setCountryeverworked] = useState([]);
	const [checkedDomestichelper, setCheckedDomestichelper] = React.useState(false);
	const [checkedcurrentDomestichelper, setCheckedcurrentDomestichelper] = React.useState(false);
	const [getExpectedSalary, setExpectedSalary] = useState([]);

	const [InputDomestichelper, setInputDomestichelper] = useState([]);
	const [InputCountryeverworked, setInputCountryeverworked] = useState([]);
	const [InputCurrentdomestichelper, setInputCurrentdomestichelper] = useState([]);
	const [InputCurrentlyLocated, setInputCurrentlyLocated] = useState([]);
	const [InputCountryPrefertowork, setInputCountryPrefertowork] = useState([]);
	const [InputExpectedSalary, setInputExpectedSalary] = useState([]);

	// const [inputname, setInputname] = useState([]);
	// const [inputmobile, setInputmobile] = useState([]);
	const [inputuseremail, setInputuseremail] = useState([]);
	const [inputadd1, setInputadd1] = useState([]);
	const [inputadd2, setInputadd2] = useState([]);
	const [inputcity, setInputcity] = useState([]);
	const [inputpcode, setInputpcode] = useState([]);
	const [inputnation, setInputnation] = useState([]);
	//const [inputoccu, setInputoccu] = useState([]);
	// const [inputdob, setInputdob] = useState([]);


	const setValue1 = (date) => {

		console.log('split', date)
		// let l = date.split('/');
		setValue(date);
	};
	const calculate_age = (dob1) => {
		var today = new Date();
		var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
		var age_now = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age_now--;
		}
		console.log(age_now);
		return age_now;
	}
	const handleChangeDomestichelper = (event) => {
		setCheckedDomestichelper(!checkedDomestichelper);
	};
	const handleChangecurrentDomestichelper = (event) => {
		setCheckedcurrentDomestichelper(!checkedcurrentDomestichelper);
	};

	const handleChangeAllergies = (event) => {
		setCheckedAllergies(!checkedAllergies);
	};
	const handleChangeMentalIllness = (event) => {
		setCheckedMentalIllness(!checkedMentalIllness);
	};
	const handleChangeEpilepsy = (event) => {
		setCheckedEpilepsy(!checkedEpilepsy);
	};
	const handleChangeAsthma = (event) => {
		setCheckedAsthma(!checkedAsthma);
	};
	const handleChangeDiabetes = (event) => {
		setCheckedDiabetes(!checkedDiabetes);
	};
	const handleChangeHypertension = (event) => {
		setCheckedHypertension(!checkedHypertension);
	};
	const handleChangeTuberculosis = (event) => {
		setCheckedTuberculosis(!checkedTuberculosis);
	};
	const handleChangeHeartdisease = (event) => {
		setCheckedHeartdisease(!checkedHeartdisease);
	};
	const handleChangeMalaria = (event) => {
		setCheckedMalaria(!checkedMalaria);
	};
	const handleChangeOperations = (event) => {
		setCheckedOperations(!checkedOperations);
	};
	const handleChangePhysicaldisablilities = (event) => {
		setCheckedPhysicaldisablilities(!checkedPhysicaldisablilities);
	};
	const [inputListjobscope, setInputListjobscope] = useState([{ jobscope: "" }]);

	const handleInputChangejobscope = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputListjobscope];
		list[index][name] = value;
		setInputListjobscope(list);
	};

	// handle click event of the Remove button
	const handleRemoveClickjobscope = index => {

		const list = [...inputListjobscope];
		list.splice(index, 1);
		setInputListjobscope(list);
	};

	// handle click event of the Add button
	const handleAddClickjobscope = () => {
		setInputListjobscope([...inputListjobscope, { jobscope: "" }]);
	};
	const [inputListcook, setInputListcook] = useState([{ cook: "" }]);

	const handleInputChangecook = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputListcook];
		list[index][name] = value;
		setInputListjobscope(list);
	};

	// handle click event of the Remove button
	const handleRemoveClickcook = index => {

		const list = [...inputListcook];
		list.splice(index, 1);
		setInputListcook(list);
	};

	// handle click event of the Add button
	const handleAddClickcook = () => {
		setInputListcook([...inputListcook, { cook: "" }]);
	};
	const [inputListfood, setInputListfood] = useState([{ food: "" }]);

	const handleInputChangefood = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputListfood];
		list[index][name] = value;
		setInputListjobscope(list);
	};

	// handle click event of the Remove button
	const handleRemoveClickfood = index => {

		const list = [...inputListfood];
		list.splice(index, 1);
		setInputListfood(list);
	};

	// handle click event of the Add button
	const handleAddClickfood = () => {
		setInputListfood([...inputListfood, { food: "" }]);
	};
	const [inputListaccom, setInputListaccom] = useState([{ accom: "" }]);

	const handleInputChangeaccom = (e, index) => {
		const { name, value } = e.target;
		const list = [...inputListaccom];
		list[index][name] = value;
		setInputListjobscope(list);
	};

	// handle click event of the Remove button
	const handleRemoveClickaccom = index => {

		const list = [...inputListaccom];
		list.splice(index, 1);
		setInputListaccom(list);
	};

	// handle click event of the Add button
	const handleAddClickaccom = () => {
		setInputListaccom([...inputListaccom, { accom: "" }]);
	};
	useEffect(() => {



		const loadCountry = async () => {
			const responsec = await axios.get("https://api.laabamone.com/api/v1/Masters/Country");
			setCountry(responsec.data.$values);
			console.log('data', responsec.data.$values);

		}
		const loadUsers = async (Val) => {
			var emp_id = Val;

			if (emp_id != '' && emp_id != null && emp_id != undefined) {


				const response = await axios.get("https://api.laabamone.com/api/v1/GetUserByID?ID=" + emp_id);
				console.log('userdetails', response.data);
				setUser(response.data);
			}

		}
		const loadHelper = async () => {


			if (helperid != '' && helperid != null && helperid != undefined) {

				const response2 = await axios.get("https://api.laabamone.com/api/v1/Masters/GetHelperListByID?ID=" + helperid);
				console.log('helperdetails', response2.data);
				setHelper(response2.data);
				loadUsers(response2.data.UserId);
			}

		}
		const loadHelperdet = async () => {
			var Helperidtext = helperid;
			if (Helperidtext != '' && Helperidtext != null && Helperidtext != undefined) {


				const response2 = await axios.get("https://api.laabamone.com/api/v1/Masters/GetResumeByID?ID=" + Helperidtext);
				console.log('resumen details', response2.data);
				setHelperdetails(response2.data);

				let strr = response2.data.Name;
				let splitname = strr.split(' ')
				setInputSalutation(splitname[0]);
				setInputname(splitname[1] + ' ' + splitname[2] + ' ' + splitname[3]);
				setInputNationality(response2.data.Nationality);
				setInputGender(response2.data.Gender);
				setValue1(response2.data.DateOfBirth);
				setInputReligion(response2.data.Religion);
				setInputCurrentLocation(response2.data.CurrentLocation);
				setInputHeight(response2.data.Height);
				setInputWeight(response2.data.Weight);
				setInputPlaceofBirth(response2.data.PlaceofBirth);
				setInputPassportNo(response2.data.PassportNo);
				setpassValue(response2.data.PassportExpiryDate);
				setInputNameofAirportRepatriated(response2.data.NameofAirportRepatriated);
				setInputHomeAddress(response2.data.HomeAddress);
				setInputHomeAddress2(response2.data.HomeAddress2);
				setInputHomeCity(response2.data.HomeCity);
				setInputHomeState(response2.data.HomeState);
				setInputHomeCountry(response2.data.HomeCountry);

				setInputHomePostal(response2.data.HomePostal);

				setInputNoOfChildren(response2.data.NoOfChildren);
				setInputAgeOfChildren(response2.data.AgeOfChildren);
				setInputNoOfSibilings(response2.data.NoOfSibilings);
				setInputEducationLevel(response2.data.EducationLevel);
				setInputMaritialStatus(response2.data.MaritialStatus);
				setInputFoodHandlingPreference(response2.data.FoodHandlingPreference);
				setInputLanguage(response2.data.Language);
				setInputMainskills(response2.data.Mainskills);
				setInputCooking(response2.data.Cooking);
				setInputSpecialSkills(response2.data.SpecialSkills);
				setInputPersonality(response2.data.Personality);
				setstartdateValue(response2.data.StartDate);
				setInputDietaryPreference(response2.data.DietaryPreference);
				setInputDescription(response2.data.Description);
				setInputSalary(response2.data.Salary);
				setInputAccommodation(response2.data.Accommodation);
				setInputOffDay(response2.data.OffDay);
				//  setInputAllergies(response2.data.Allergies);
				setCheckedAllergies(response2.data.Allergies)
				setCheckedMentalIllness(response2.data.MentalIllness)
				setCheckedEpilepsy(response2.data.Epilepsy)
				setCheckedAsthma(response2.data.Asthma)
				setCheckedDiabetes(response2.data.Diabetes)
				setCheckedHypertension(response2.data.Hypertension)
				setCheckedTuberculosis(response2.data.Tuberculosis)
				setCheckedHeartdisease(response2.data.Heartdisease)
				setCheckedMalaria(response2.data.Malaria)
				setCheckedOperations(response2.data.Operations)
				setInputOthers(response2.data.Others);
				setCheckedPhysicaldisablilities(response2.data.Physicaldisablilities)
				setExpectedSalary(response2.data.ExpectedSalary)
				if (response2.data.CountryPrefertowork != '') {
					let cnt = response2.data.CountryPrefertowork;
					let cnt2 = cnt.split(',');
					setCountryPrefertowork(cnt2);

				}
				if (response2.data.Countryeverworked != '') {
					let cnt = response2.data.Countryeverworked;
					let cnt2 = cnt.split(',');
					setCountryeverworked(cnt2);

				}


				setInputCurrentlyLocated(response2.data.CurrentlyLocated)

			}


		}
		if (helperid != '' && helperid != undefined) {
			loadHelper();
			loadHelperdet();
			//loadUsers();
		}



		loadCountry();
		setGifbutt('');
	}, [helperid, resumeid])
	const registerUser1 = async event => {
		event.preventDefault()

		let type = "Helper";
		let url = "";
		console.log('email', event.target.email.value);
		console.log('password', event.target.password.value);
		console.log('mob_no', event.target.mob_no.value);
		console.log('mob_code', event.target.mob_code.value);
		console.log('status', event.target.status.value);
		console.log('type', type);

		if (helper.UserId != '' && helper.UserId != null) {

			const response = await fetch("https://api.laabamone.com/api/v1/UpdateProfile", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ ID: helper.UserId, Password: event.target.password.value, Status: event.target.status.value, ContactNumber: event.target.mob_no.value, SourceCountry: event.target.mob_code.value, UserTypes: type }),

			});
			const data = await response.json();
			console.log('dataed', data);
			const errmessage = data.ErrorMessages.$values[0];

			const res = data.ResponseCode;
			if (res == 'Created') {

				//	setGifbutt('/assets/images/loading.gif'); 
				setErr('');
				setSuc('Successfully Updated..');


			}
			else {
				setErr(errmessage);
				setSuc('');
			}



		}
		else {
			const response = await fetch("https://api.laabamone.com/api/v1/CreateProfile", {

				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({ Email: event.target.email.value, Password: event.target.password.value, ContactNumber: event.target.mob_no.value, SourceCountry: event.target.mob_code.value, UserTypes: type }),

			});
			const data = await response.json();
			console.log('data', data);
			const errmessage = data.ErrorMessages.$values[0];
			//url =`accounts/getuser/edit/${empid}`;

			const res = data.ResponseCode;
			if (res == 'Created') {
				const userid1 = data.Item['ID'];
				console.log('userid', userid1);

				setUSerid(userid1);
				jsCookie.set('empuserid', userid1);
				CreateHelper();

			}
			else {
				setErr(errmessage);

			}
			//window.location.href = `${url}`;

		}


	}

	const CreateHelper = async event => {

		let type = "";
		let url = "";
		let role = "2";
		var userid = jsCookie.get('empuserid');
		console.log('useridadd', userid)
		//  var userid = useridadd; 


		const response = await fetch("https://api.laabamone.com/api/v1/Masters/CreateHelper", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({ HelperId: '0', UserId: userid, SupplierId: '0', ResumeId: '0', DocumentsId: '0', JobsId: '0', ChatsId: '0', Salary: '0', SupplierFee: '0' }),

		});
		const data = await response.json();
		const rescode = data.ResponseCode;
		console.log('data', data);

		if (rescode == 'Created') {
			jsCookie.set('Helperid', data.Item.HelperId);
			setErr(rescode);

		}
		else {
			console.log('ttttttt');
		}


	}


	const registerHelper = async event => {
		event.preventDefault();
		setGifbutt('/loading.gif');

		let HELPERID = '';
		if (helperid != undefined) {
			HELPERID = helperid;
		}
		else {
			HELPERID = jsCookie.get('Helperid');
		}

		const dob2 = value;
		let dob1 = Moment(`${dob2}`).format('DD/MM/YYYY');
		let ddate = dob1.split("/");
		const dob = ddate[2] + '-' + ddate[1] + '-' + ddate[0];

		const PassportExpiryDate2 = passvalue;
		let PassportExpiryDate1 = Moment(`${PassportExpiryDate2}`).format('DD/MM/YYYY');
		let expdate = PassportExpiryDate1.split("/");
		const PassportExpiryDate = expdate[2] + '-' + expdate[1] + '-' + expdate[0];

		let StartDate2 = startdatevalue;
		let StartDate1 = Moment(`${StartDate2}`).format('DD/MM/YYYY');
		let sdate = StartDate1.split("/");
		let StartDate11 = sdate[2] + '-' + sdate[1] + '-' + sdate[0];


		let MentalIllness = checkedMentalIllness
		let Epilepsy = checkedEpilepsy
		console.log('checkedMentalIllness', checkedMentalIllness);
		let Hypertension = checkedHypertension
		let Asthma = checkedAsthma
		let Diabetes = checkedDiabetes
		let Tuberculosis = checkedTuberculosis
		let Heartdisease = checkedHeartdisease
		let Malaria = checkedMalaria
		let Operations = checkedOperations

		let a = '';
		console.log('len', inputListcook.length);

		let cooksss = '';
		let inputListcookLength = inputListcook.length;
		for (let i = 0; i < inputListcookLength; i++) {

			if (i == '0') { cooksss += inputListcook[i].cooking_skill; }
			else {
				cooksss += ',';
				cooksss += inputListcook[i].cooking_skill;
			}
		}
		let foodd = '';
		let inputListfoodLength = inputListfood.length;
		for (let i = 0; i < inputListfoodLength; i++) {

			if (i == '0') { foodd += inputListfood[i].food_handling; }
			else {
				foodd += ',';
				foodd += inputListfood[i].food_handling;
			}
		}
		let accommm = '';
		let inputListaccomLength = inputListaccom.length;
		for (let i = 0; i < inputListaccomLength; i++) {

			if (i == '0') {

				if (inputListaccom[i].accommodation != '') {
					accommm += inputListaccom[i].accommodation;
				}

			}
			else {

				accommm += ',';
				accommm += inputListaccom[i].accommodation;

			}
		}
		let precont = '';
		let PreferredContactLength = country.length;
		for (let i = 0; i < PreferredContactLength; i++) {

			if (event.target.everworked[i].checked == true) {
				if (precont != '') {
					precont += ','
					precont += event.target.everworked[i].value
				}
				else { precont += event.target.everworked[i].value }

			}
		}
		let prwork = '';
		let PrefertoworkLength = country.length;
		for (let i = 0; i < PrefertoworkLength; i++) {

			if (event.target.CountryPrefertowork[i].checked == true) {
				if (prwork != '') {
					prwork += ','
					prwork += event.target.CountryPrefertowork[i].value
				}
				else { prwork += event.target.CountryPrefertowork[i].value }

			}
		}

		let fullnameee = InputSalutation + ' ' + Inputname;
		jsCookie.set('Name', fullnameee);

		jsCookie.set('Domestichelper', checkedDomestichelper);
		jsCookie.set('currentDomestichelper', checkedcurrentDomestichelper);
		jsCookie.set('Cooking', cooksss);
		jsCookie.set('FoodHandlingPreference', foodd);
		jsCookie.set('Accommodation', accommm);
		jsCookie.set('Countryeverworked', precont);
		jsCookie.set('CountryPrefertowork', prwork);
		jsCookie.set('ExpectedSalary', getExpectedSalary != undefined ? getExpectedSalary : '');
		//	jsCookie.set('Name',event.target.fullname.value);  
		jsCookie.set("Nationality", event.target.Nationality.value);
		jsCookie.set("DateOfBirth", dob);
		jsCookie.set("Gender", event.target.gender.value);
		jsCookie.set("Religion", InputReligion);
		jsCookie.set("Description", event.target.Description.value);
		jsCookie.set("Height", event.target.height.value);
		jsCookie.set("Weight", event.target.weight.value);
		jsCookie.set("PassportNo", event.target.PassportNo.value);
		jsCookie.set("PassportExpiryDate", PassportExpiryDate);
		jsCookie.set("NameofAirportRepatriated", event.target.NameofAirportRepatriated.value);
		jsCookie.set("EducationLevel", event.target.EducationLevel.value);
		jsCookie.set("NoOfSibilings", event.target.NoOfSibilings.value);
		jsCookie.set("MaritialStatus", event.target.MaritialStatus.value);
		jsCookie.set("NoOfChildren", event.target.NoOfChildren.value);
		jsCookie.set("AgeOfChildren", event.target.AgeOfChildren.value);
		jsCookie.set("FoodHandlingPreference", event.target.FoodHandlingPreference.value);
		jsCookie.set("Language", event.target.Language.value);
		jsCookie.set("Cooking", event.target.Cooking.value);
		jsCookie.set("Mainskills", event.target.Mainskills.value);
		jsCookie.set("SpecialSkills", event.target.SpecialSkills.value);
		jsCookie.set("Personality", event.target.Personality.value);
		jsCookie.set("StartDate", StartDate11);
		jsCookie.set("Salary", event.target.Salary.value);
		jsCookie.set("Accommodation", event.target.Accommodation.value);
		jsCookie.set("OffDay", InputOffDay);
		jsCookie.set("Allergies", checkedAllergies);
		jsCookie.set("MentalIllness", MentalIllness);
		jsCookie.set("Epilepsy", Epilepsy);
		jsCookie.set("Asthma", Asthma);
		jsCookie.set("Diabetes", Diabetes);
		jsCookie.set("Hypertension", Hypertension);
		jsCookie.set("Tuberculosis", Tuberculosis);
		jsCookie.set("Heartdisease", Heartdisease);
		jsCookie.set("Malaria", Malaria);
		jsCookie.set("Operations", Operations);
		jsCookie.set("Others", event.target.Others.value);
		jsCookie.set("PlaceofBirth", event.target.PlaceofBirth.value);
		jsCookie.set("HomeAddress2", event.target.address2.value);
		jsCookie.set("HomeCity", event.target.city.value);
		jsCookie.set("HomeState", event.target.state.value);
		jsCookie.set("HomeCountry", event.target.country.value);
		jsCookie.set("HomePostal", event.target.postcode.value);
		jsCookie.set("MobileNo", event.target.mob_no.value);
		jsCookie.set("Email", event.target.Email.value);
		jsCookie.set("DietaryPreference", event.target.DietaryPreference.value);

		if (resumeid != undefined && resumeid != null && resumeid != '') {
			var passdata = {
				"ResumeId": resumeid,
				"HelperId": helperid,
				"Name": jsCookie.get('Name'),
				"Nationality": jsCookie.get('Nationality'),
				"DateOfBirth": jsCookie.get('DateOfBirth'),
				"Gender": jsCookie.get('Gender'),
				"Religion": jsCookie.get('Religion'),
				"CurrentLocation": "0",
				"Description": jsCookie.get('Description'),
				"Height": jsCookie.get('Height'),
				"Weight": jsCookie.get('Weight'),
				"PassportNo": jsCookie.get('PassportNo'),
				"PassportExpiryDate": jsCookie.get('PassportExpiryDate'),
				"NameofAirportRepatriated": jsCookie.get('NameofAirportRepatriated'),
				"HomeAddress": "string",
				"EducationLevel": jsCookie.get('EducationLevel'),
				"NoOfSibilings": jsCookie.get('NoOfSibilings'),
				"MaritialStatus": jsCookie.get('MaritialStatus'),
				"NoOfChildren": jsCookie.get('NoOfChildren'),
				"AgeOfChildren": jsCookie.get('AgeOfChildren'),
				"FoodHandlingPreference": jsCookie.get('FoodHandlingPreference'),
				"Language": InputLanguage,
				"Mainskills": event.target.Mainskills.value,
				"Cooking": jsCookie.get('Cooking'),
				"SpecialSkills": event.target.SpecialSkills.value,
				"Personality": event.target.Personality.value,
				"StartDate": StartDate11,
				"Salary": event.target.Salary.value,
				"Accommodation": jsCookie.get('Accommodation'),
				"OffDay": jsCookie.get('OffDay'),
				"Allergies": jsCookie.get('Allergies'),
				"MentalIllness": jsCookie.get('MentalIllness') == 'true' ? true : false,
				"Epilepsy": jsCookie.get('Epilepsy') == 'true' ? true : false,
				"Asthma": jsCookie.get('Asthma') == 'true' ? true : false,
				"Diabetes": jsCookie.get('Diabetes') == 'true' ? true : false,
				"Hypertension": jsCookie.get('Hypertension') == 'true' ? true : false,
				"Tuberculosis": jsCookie.get('Tuberculosis') == 'true' ? true : false,
				"Heartdisease": jsCookie.get('Heartdisease') == 'true' ? true : false,
				"Malaria": jsCookie.get('Malaria') == 'true' ? true : false,
				"Operations": jsCookie.get('Operations') == 'true' ? true : false,
				"Others": jsCookie.get('Others'),
				"EmploymentExperienceId": 0,
				"PlaceofBirth": jsCookie.get('PlaceofBirth'),
				"HomeAddress2": jsCookie.get('HomeAddress2'),
				"HomeCity": jsCookie.get('HomeCity'),
				"HomeState": jsCookie.get('HomeState'),
				"HomeCountry": jsCookie.get('HomeCountry'),
				"HomePostal": jsCookie.get('HomePostal'),
				"MobileNo": jsCookie.get('MobileNo'),
				"Email": jsCookie.get('Email'),
				"DietaryPreference": jsCookie.get('DietaryPreference'),
				"Physicaldisablilities": false,
				"Domestichelper": jsCookie.get('Domestichelper') == 'true' ? true : false,
				"Countryeverworked": jsCookie.get('Countryeverworked'),
				"Currentdomestichelper": jsCookie.get('Currentdomestichelper') == 'true' ? true : false,
				"CurrentlyLocated": InputCurrentlyLocated,
				"CountryPrefertowork": jsCookie.get('CountryPrefertowork'),
				"ExpectedSalary": jsCookie.get('ExpectedSalary'),
				"PreferredContactMethod": "string",
				"PreferredContactTiming": "string",
				"Howdidyouhearaboutus": "string"
			};


			const response = await fetch("https://api.laabamone.com/api/v1/Masters/UpdateResume", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(passdata),

			});
			const dataemp = await response.json();

			console.log('response', dataemp);
			const res = dataemp.ResponseCode;
			if (res == 'Created') {

				setGifbutt('/loading.gif');
				setErr('');
				setSuc('Successfully Updated..');
				setGifbutt('');
				// window.location.href = "/empmyaccount";   
				window.scrollTo(0, 0)
			}
			else {
				setGifbutt('');
				const errmessage = dataemp.title;
				setErr(errmessage);
				setSuc('');
				window.scrollTo(0, 0)
			}



		}

		else {
			var passdata = {
				"ResumeId": 0,
				"HelperId": helperid,
				"Name": jsCookie.get('Name'),
				"Nationality": jsCookie.get('Nationality'),
				"DateOfBirth": jsCookie.get('DateOfBirth'),
				"Gender": jsCookie.get('Gender'),
				"Religion": jsCookie.get('Religion'),
				"CurrentLocation": "0",
				"Description": jsCookie.get('Description'),
				"Height": jsCookie.get('Height'),
				"Weight": jsCookie.get('Weight'),
				"PassportNo": jsCookie.get('PassportNo'),
				"PassportExpiryDate": jsCookie.get('PassportExpiryDate'),
				"NameofAirportRepatriated": jsCookie.get('NameofAirportRepatriated'),
				"HomeAddress": "string",
				"EducationLevel": jsCookie.get('EducationLevel'),
				"NoOfSibilings": jsCookie.get('NoOfSibilings'),
				"MaritialStatus": jsCookie.get('MaritialStatus'),
				"NoOfChildren": jsCookie.get('NoOfChildren'),
				"AgeOfChildren": jsCookie.get('AgeOfChildren'),
				"FoodHandlingPreference": jsCookie.get('FoodHandlingPreference'),
				"Language": InputLanguage,
				"Mainskills": event.target.Mainskills.value,
				"Cooking": jsCookie.get('Cooking'),
				"SpecialSkills": event.target.SpecialSkills.value,
				"Personality": event.target.Personality.value,
				"StartDate": StartDate11,
				"Salary": event.target.Salary.value,
				"Accommodation": jsCookie.get('Accommodation'),
				"OffDay": jsCookie.get('OffDay'),
				"Allergies": jsCookie.get('Allergies'),
				"MentalIllness": jsCookie.get('MentalIllness') == 'true' ? true : false,
				"Epilepsy": jsCookie.get('Epilepsy') == 'true' ? true : false,
				"Asthma": jsCookie.get('Asthma') == 'true' ? true : false,
				"Diabetes": jsCookie.get('Diabetes') == 'true' ? true : false,
				"Hypertension": jsCookie.get('Hypertension') == 'true' ? true : false,
				"Tuberculosis": jsCookie.get('Tuberculosis') == 'true' ? true : false,
				"Heartdisease": jsCookie.get('Heartdisease') == 'true' ? true : false,
				"Malaria": jsCookie.get('Malaria') == 'true' ? true : false,
				"Operations": jsCookie.get('Operations') == 'true' ? true : false,
				"Others": jsCookie.get('Others'),
				"EmploymentExperienceId": 0,
				"PlaceofBirth": jsCookie.get('PlaceofBirth'),
				"HomeAddress2": jsCookie.get('HomeAddress2'),
				"HomeCity": jsCookie.get('HomeCity'),
				"HomeState": jsCookie.get('HomeState'),
				"HomeCountry": jsCookie.get('HomeCountry'),
				"HomePostal": jsCookie.get('HomePostal'),
				"MobileNo": jsCookie.get('MobileNo'),
				"Email": jsCookie.get('Email'),
				"DietaryPreference": jsCookie.get('DietaryPreference'),
				"Physicaldisablilities": false,
				"Domestichelper": jsCookie.get('Domestichelper') == 'true' ? true : false,
				"Countryeverworked": jsCookie.get('Countryeverworked'),
				"Currentdomestichelper": jsCookie.get('Currentdomestichelper') == 'true' ? true : false,
				"CurrentlyLocated": InputCurrentlyLocated,
				"CountryPrefertowork": jsCookie.get('CountryPrefertowork'),
				"ExpectedSalary": jsCookie.get('ExpectedSalary'),
				"PreferredContactMethod": "string",
				"PreferredContactTiming": "string",
				"Howdidyouhearaboutus": "string"
			};


			const response = await fetch("https://api.laabamone.com/api/v1/Masters/CreateResume", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(passdata),

			});
			const dataemp = await response.json();

			console.log('response', dataemp);
			const res = dataemp.ResponseCode;
			if (res == 'Created') {

				setGifbutt('/loading.gif');
				setErr('');
				setSuc('Successfully Created..');
				setGifbutt('');
				window.scrollTo(0, 0)

			}
			else {
				setGifbutt('');
				const errmessage = dataemp.title;
				setErr(errmessage);
				setSuc('');
				window.scrollTo(0, 0)
			}
		}








	}


	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">Information</Tab>
					<Tab className="nav-link">Documents</Tab>
					<Tab className="nav-link">Chats</Tab>
					<Tab className="nav-link">Payments</Tab>
					<Tab className="nav-link">Account</Tab>
				</TabList>
				<TabPanel>


					<FormGroup className="row">

						<Fragment>
							<h5 className="f-w-600 f-16"> &nbsp;&nbsp;&nbsp;User Details</h5>

							<form onSubmit={
								registerUser1
							}>
								<Row className="col-md-12">
									<p style={{ color: 'red' }}>{err}</p>
									<p style={{ color: 'Green', fontSize: '20px' }}>{suc}</p>



									<FormGroup className="row col-md-12">
										<Label className="col-md-2">
											<span>*</span>Mobile No
										</Label>

										<select className="form-control col-md-1" name="mob_code">
											{country.map((code, i) => (code.CountryID == getuser['SourceCountry'] ?

												<option value={code.CountryID} key={i} selected>{code.DailingCode}</option>
												:
												<option value={code.CountryID} key={i}>{code.DailingCode}</option>
											))}

										</select> &nbsp;


										<input name="mob_no"
											value={inputmobile == "" ? (getuser['ContactNumber'] != '' ? getuser['ContactNumber'] : inputmobile) : inputmobile}
											onChange={e => setInputmobile(e.target.value)}
											placeholder="Enter your mobile" required="" type="text" className="form-control col-xl-3 col-md-3" />
										<Label className="col-md-2">
											<span>*</span>Status
										</Label>
										<select className="form-control col-md-2" name="status"   >

											<option value={1} selected={(getuser['Status'] == '1') ? 'selected' : ''}>
												Posted
											</option>
											<option value={2} selected={(getuser['Status'] == '2') ? 'selected' : ''}>
												Pending
											</option>
											<option value={3} selected={(getuser['Status'] == '3') ? 'selected' : ''}>
												Deleted
											</option>
											<option value={4} selected={(getuser['Status'] == '4') ? 'selected' : ''}>
												Suspended
											</option>
										</select>
									</FormGroup>




									<FormGroup className="row col-md-12">
										<Label className="col-md-2">
											<span>*</span>Email
										</Label>
										<Input
											className="form-control col-md-4"
											id="validationCustom1"
											type="text"
											required=""
											name="email"
											value={inputuseremail == "" ? (getuser['Email'] != '' ? getuser['Email'] : inputuseremail) : inputuseremail}
											onChange={e => setInputuseremail(e.target.value)}

										/>&nbsp;
										<Label className="col-md-2">
											<span>*</span>Password
										</Label>
										<Input
											className="form-control col-md-2"
											id="validationCustom1"
											type="password"
											required=""
											name="password"
											value={inputpass == "" ? (getuser['Password'] != '' ? getuser['Password'] : inputpass) : inputpass}
											onChange={e => setInputpass(e.target.value)}

										/>
										<div className="col-md-1" >

											{((gifbutto != '') && (gifbutto != null)) ?
												<><img src={gifbutto} style={{ width: '100px;', height: '46px', border: '2.5px solid #557191', borderRadius: '30px' }}></img></>
												:
												<>	<Button type="button" color="primary" type="submit">Save</Button></>
											}



										</div>
									</FormGroup>



								</Row>


							</form>


						</Fragment>



						<Row>


							<div className="col-md-12">
								<h4>Account Details</h4>
								<div className="theme-card" style={{ backgroundColor: '#fff' }}>
									<p style={{ color: 'red' }}>{err}</p>
									<p style={{ color: 'red' }}>{suc}</p>
									<form method="post" onSubmit={registerHelper} >


										<div className="row">

											<div className="col-md-12 row">

												<div className="col-md-1">
													<FormControl sx={{ m: 1, minWidth: 72 }}>
														<InputLabel >Salutation</InputLabel>
														<Select name="salutation" value={InputSalutation} onChange={e => setInputSalutation(e.target.value)} label="Salutation" required>

															<MenuItem value="0" >MR</MenuItem>
															<MenuItem value="1" >MS</MenuItem>
															<MenuItem value="2" >MRS</MenuItem>
															<MenuItem value="3" >DR</MenuItem>


														</Select>

													</FormControl>




												</div>
												<div className="col-md-5">
													<FormControl sx={{ m: 1, minWidth: 377 }}>

														<TextField label="Full Name" required value={Inputname}
															onChange={e => setInputname(e.target.value)}
															name="fullname" variant="outlined" />



													</FormControl>

												</div>
												<div className="col-md-2">
													<FormControl sx={{ m: 1, minWidth: 147 }}>
														<InputLabel >Gender</InputLabel>
														<Select name="gender" label="Gender" value={InputGender} required onChange={e => setInputGender(e.target.value)}>
															<MenuItem value="0" >Male</MenuItem>
															<MenuItem value="1">Female</MenuItem>
															<MenuItem value="2" >Not to Specify</MenuItem>

														</Select>

													</FormControl>




												</div>
												<div className="col-md-3">

													<FormControl sx={{ m: 1, minWidth: 222 }}>
														<LocalizationProvider dateAdapter={AdapterDateFns} >
															<DatePicker className='form-control'
																openTo="year"
																views={['year', 'month', 'day']}
																label="DOB"
																value={value}
																onChange={(newValue) => {

																	setValue1(newValue);
																}}
																renderInput={(params) => <TextField {...params} helperText={null} />}
															/>
														</LocalizationProvider></FormControl>

												</div>
												<div className="col-md-1">
													<FormControl sx={{ m: 1, minWidth: 73 }}>


														<TextField label="Age" value={value != NaN && value != undefined ? calculate_age(`${value}`) : ''}
															disabled variant="outlined" />



													</FormControl>

												</div>
											</div>


											<div className="col-md-12 row">


												<div className="col-md-1">
													<FormControl sx={{ m: 1, minWidth: 73 }}>
														<TextField label="Height" value={InputHeight} onChange={e => setInputHeight(e.target.value)} name="height" variant="outlined" />
													</FormControl>

												</div>
												<div className="col-md-1">
													<FormControl sx={{ m: 1, minWidth: 73 }}>
														<TextField label="Weight" value={InputWeight} onChange={e => setInputWeight(e.target.value)} name="weight" />
													</FormControl>
												</div>
												<div className="col-md-4">
													<FormControl sx={{ m: 1, minWidth: 300 }}>
														<TextField name="PlaceofBirth" value={InputPlaceofBirth} onChange={e => setInputPlaceofBirth(e.target.value)} label="Place of Birth" />
													</FormControl>
												</div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>

														<TextField label="Passport No" value={InputPassportNo}
															onChange={e => setInputPassportNo(e.target.value)}
															name="PassportNo" variant="outlined" />
													</FormControl>
												</div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 251 }}>
														<LocalizationProvider dateAdapter={AdapterDateFns} >
															<DatePicker
																openTo="year"
																views={['year', 'month', 'day']}
																label="Expiry Date"
																//  value={value}
																value={passvalue}
																onChange={(newValue) => {
																	setpassValue(newValue);
																}}
																renderInput={(params) => <TextField {...params} helperText={null} />}
															/>
														</LocalizationProvider></FormControl>




												</div>

											</div>
											<div className="col-md-12 row">
												<div className="col-md-6">
													<FormControl sx={{ m: 1, minWidth: 451 }}>
														<TextField
															value={InputHomeAddress}
															onChange={e => setInputHomeAddress(e.target.value)}
															name="address1" label="Street Address" />
													</FormControl>
												</div>

												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>
														<TextField
															value={InputHomeCity}
															onChange={e => setInputHomeCity(e.target.value)}
															name="city" label="City" />
													</FormControl>
												</div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>
														<TextField
															value={InputHomeState}
															onChange={e => setInputHomeState(e.target.value)}
															name="state" label="State" />
													</FormControl>
												</div>
												<div className="col-md-6">
													<FormControl sx={{ m: 1, minWidth: 451 }}>
														<TextField
															value={InputHomeAddress2}
															onChange={e => setInputHomeAddress2(e.target.value)}
															name="address2" label="Street Address Line 2" />
													</FormControl>  </div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>
														<InputLabel >Country</InputLabel>
														<Select name="country" label="Country" value={InputHomeCountry} onChange={e => setInputHomeCountry(e.target.value)} required>
															<MenuItem>SELECT</MenuItem>
															{country.map((code, i) => (
																code.CountryID == (jsCookie.get('empmob_code')) ?
																	<MenuItem value={code.CountryID} key={i} selected>{code.CountryName}</MenuItem>
																	: <MenuItem value={code.CountryID} key={i} >{code.CountryName}</MenuItem>
															))}
														</Select>

													</FormControl>


													{/*}    <TextField name="PostalCode" label="State/Province"  />*/}

												</div>


												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>
														<TextField
															value={InputHomePostal}
															onChange={e => setInputHomePostal(e.target.value)}
															name="postcode" label="Postal/Zip Code" />
													</FormControl>
												</div>
											</div>
											<div className="col-md-12 row" >


												<div className="col-md-6">
													<FormControl sx={{ m: 1, minWidth: 451 }}>
														<TextField value={InputNameofAirportRepatriated}
															onChange={e => setInputNameofAirportRepatriated(e.target.value)} name="NameofAirportRepatriated" label="Name of Airport Repatriated" />
													</FormControl>
												</div>

												<div className="col-md-2" >
													<FormControl sx={{ m: 1, minWidth: 145 }}>
														<InputLabel >Maritial Status</InputLabel>
														<Select name="MaritialStatus" label="Maritial Status" value={InputMaritialStatus} onChange={e => setInputMaritialStatus(e.target.value)} required >

															<MenuItem value="0">SELECT</MenuItem>
															<MenuItem value="married">Married</MenuItem>
															<MenuItem value="single">Single</MenuItem>
														</Select>
													</FormControl>





												</div>
												<div className="col-md-2">

													<FormControl sx={{ m: 1, minWidth: 145 }}>
														<InputLabel >No Of Children</InputLabel>
														<Select name="NoOfChildren" label="No Of Children" value={InputNoOfChildren} onChange={e => setInputNoOfChildren(e.target.value)}  >

															<MenuItem value="0">SELECT</MenuItem>
															<MenuItem value="1">1</MenuItem>
															<MenuItem value="2">2</MenuItem>
															<MenuItem value="3">3</MenuItem>
															<MenuItem value="4">4</MenuItem>
														</Select>

													</FormControl>



												</div>
												<div className="col-md-2">
													<FormControl sx={{ m: 1, minWidth: 159 }}>
														<TextField name="AgeOfChildren" value={InputAgeOfChildren} onChange={e => setInputAgeOfChildren(e.target.value)} label="Age Of Children" />
													</FormControl>


												</div>
											</div>
											<div className="col-md-12 row" >


												<div className="col-md-2">
													<FormControl sx={{ m: 1, minWidth: 145 }}>
														<TextField name="NoOfSibilings" value={InputNoOfSibilings} onChange={e => setInputNoOfSibilings(e.target.value)} label="No.of siblings " />
													</FormControl>
												</div>

												<div className="col-md-2">
													<FormControl sx={{ m: 1, minWidth: 133 }}>
														<InputLabel >Education Level</InputLabel>
														<Select name="EducationLevel" value={InputEducationLevel} onChange={e => setInputEducationLevel(e.target.value)} label="Education Level">

															<MenuItem value="">
																SELECT</MenuItem>
															<MenuItem value="UG">
																UG</MenuItem>
															<MenuItem value="PG">
																PG</MenuItem>
														</Select>
													</FormControl>



												</div>

												<div className="col-md-2">
													<FormControl sx={{ m: 1, minWidth: 133 }}>
														<InputLabel >Nationality</InputLabel>
														<Select name="Nationality" value={InputNationality} onChange={e => setInputNationality(e.target.value)} label="Nationality">

															<MenuItem>SELECT </MenuItem>
															{country.map((code, i) => (
																code.CountryID == (jsCookie.get('empmob_code')) ?
																	<MenuItem value={code.CountryID} key={i} selected>{code.CountryName}</MenuItem>
																	: <MenuItem value={code.CountryID} key={i} >{code.CountryName}</MenuItem>
															))}
														</Select>
													</FormControl>

												</div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>
														<InputLabel >Religion</InputLabel>
														<Select name="Religion" value={InputReligion} onChange={e => setInputReligion(e.target.value)} label="Religion">

															<MenuItem>SELECT </MenuItem>
															{/*} <MenuItem value="Hinduism"  >Hinduism</MenuItem>*/}
															<MenuItem value="Muslim"  >Muslim</MenuItem>
															<MenuItem value="Christian" >Christian</MenuItem>
															<MenuItem value="Buddhist" >Buddhist</MenuItem>
															<MenuItem value="Buddhist" >No preference</MenuItem>

														</Select>


													</FormControl>


												</div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>
														<InputLabel >Dietry Preference</InputLabel>
														<Select name="DietaryPreference" value={InputDietaryPreference} onChange={e => setInputDietaryPreference(e.target.value)} label="Dietry Preference" required>
															<MenuItem value="Halal">Halal</MenuItem>
															<MenuItem value="Vegetarian">Vegetarian</MenuItem>
															<MenuItem value="NoPreference">No Preference</MenuItem>


														</Select>

													</FormControl>


												</div>



											</div>
											<div className="col-md-12 row" >

												<div className="col-md-1">
													<FormControl sx={{ m: 1, minWidth: 72 }}>
														<InputLabel >Mob.code</InputLabel>
														<Select name="mob_code" value={InputHomeCountry} onChange={e => setInputHomeCountry(e.target.value)} label="Mob.code">

															{country.map((code, i) => (

																code.CountryID == (jsCookie.get('empmob_code')) ?
																	<MenuItem value={code.CountryID} key={i} selected>{code.DailingCode}</MenuItem>
																	: <MenuItem value={code.CountryID} key={i} >{code.DailingCode}</MenuItem>
															))}
														</Select>
													</FormControl>
												</div>
												<div className="col-md-5">
													<FormControl sx={{ m: 1, minWidth: 364 }}>
														<TextField name="mob_no"
															value={inputmobile}
															onChange={e => setInputmobile(e.target.value)}
															label="Mobile No" />
													</FormControl>
												</div>

												<div className="col-md-6">
													<FormControl sx={{ m: 1, minWidth: 451 }}>
														<TextField name="FoodHandlingPreference" label="Food handling preferences" />
													</FormControl>
												</div>

											</div>
											<div className="col-md-12 row" >


												<div className="col-md-12">
													<FormControl sx={{ m: 1, minWidth: 451 }}>
														<label>Email : {getuser['Email'] != '' ? getuser['Email'] : jsCookie.get('empmail') != '' ? jsCookie.get('empmail') : 'Email'}</label>
														<input name="Email" value={getuser['Email'] != '' ? getuser['Email'] : jsCookie.get('empmail') != '' ? jsCookie.get('empmail') : ''} type="hidden"></input>

													</FormControl>
												</div>


											</div>
											<div className="col-md-12 row">
												<div className="col-md-12" ><br />
													<label for="review" className="col-md-12"><h4 >My skills</h4></label>
												</div>
												<div className="col-md-4">
													<FormControl sx={{ m: 1, minWidth: 298 }}>
														<InputLabel >Spoken Language</InputLabel>
														<Select name="Language" value={InputLanguage} onChange={e => setInputLanguage(e.target.value)} label="Spoken Language" required>
															<MenuItem value="English">English</MenuItem>
															<MenuItem value="Mandarin">Mandarin</MenuItem>
															<MenuItem value="Bahasa">Bahasa</MenuItem>
															<MenuItem value="Tamil">Tamil</MenuItem>
															<MenuItem value="Hokkien">Hokkien</MenuItem>
															<MenuItem value="Cantonese">Cantonese</MenuItem>

														</Select>

													</FormControl>
												</div>
												<div className="col-md-4">
													<FormControl sx={{ m: 1, minWidth: 298 }}>
														<TextField
															id="outlined-multiline-static"
															label="Main Skills"
															name="Mainskills" value={InputMainskills} onChange={e => setInputMainskills(e.target.value)}

														/> </FormControl>
												</div>
												<div className="col-md-4">
													<FormControl sx={{ m: 1, minWidth: 327 }}>
														<TextField
															id="outlined-multiline-static"
															label="Cooking"
															name="Cooking" value={InputCooking} onChange={e => setInputCooking(e.target.value)}

														/> </FormControl>
												</div>
												<div className="col-md-4">
													<FormControl sx={{ m: 1, minWidth: 298 }}>
														<TextField
															id="outlined-multiline-static"
															label="Special Skills"
															name="SpecialSkills" value={InputSpecialSkills} onChange={e => setInputSpecialSkills(e.target.value)}

														/> </FormControl>
												</div>
												<div className="col-md-4">
													<FormControl sx={{ m: 1, minWidth: 354 }}>
														<TextField
															id="outlined-multiline-static"
															label="Personality"
															name="Personality" value={InputPersonality} onChange={e => setInputPersonality(e.target.value)}

														/>
													</FormControl>




												</div>
											</div>
											<div className="col-md-12 row">
												<div className="col-md-12" ><br />
													<label for="review" className="col-md-12"><h4 >Requirements</h4></label>
												</div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 225 }}>
														<LocalizationProvider dateAdapter={AdapterDateFns} >
															<DatePicker className='form-control'
																openTo="year"
																views={['year', 'month', 'day']}
																label="Start date"
																value={startdatevalue}
																onChange={(newValue) => {
																	setstartdateValue(newValue);
																}}
																renderInput={(params) => <TextField {...params} helperText={null} required />}
															/>
														</LocalizationProvider></FormControl>



												</div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>

														<TextField label="Salary" value={InputSalary} onChange={e => setInputSalary(e.target.value)}

															name="Salary" variant="outlined" />



													</FormControl>
												</div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>
														<InputLabel >Accommodation</InputLabel>
														<Select value={InputAccommodation} onChange={e => setInputAccommodation(e.target.value)} name="Accommodation" label="Accommodation" required>
															<MenuItem value="1">In separate room</MenuItem>
															<MenuItem value="2">Share</MenuItem>
															<MenuItem value="3">Flexible</MenuItem>
															<MenuItem value="4">To Be Discussed</MenuItem>
														</Select>

													</FormControl>
												</div>
												<div className="col-md-3">
													<FormControl sx={{ m: 1, minWidth: 222 }}>
														<InputLabel >Off day</InputLabel>
														<Select name="OffDay" value={InputOffDay} onChange={e => setInputOffDay(e.target.value)} label="OffDay" required>
															<MenuItem value="0">Weekly</MenuItem>
															<MenuItem value="1">Monthly</MenuItem>
															<MenuItem value="2">Quarterly</MenuItem>
															<MenuItem value="3">Others (pls specify)</MenuItem>
														</Select>

													</FormControl>
												</div>

											</div>

											<div className="col-md-12 row">
												<div className="col-md-12" ><br />
													<label for="review" className="col-md-12"><h3>Medical history</h3></label>
												</div>
												<div className="col-md-12 row">
													<div className="col-md-3" >
														<InputLabel >Allergies</InputLabel>

														<Switch checked={checkedAllergies}
															onClick={handleChangeAllergies}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>
													<div className="col-md-3" >
														<InputLabel >MentalIllness</InputLabel>

														<Switch checked={checkedMentalIllness}
															onClick={handleChangeMentalIllness}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>
													<div className="col-md-3" >
														<InputLabel >Epilepsy</InputLabel>

														<Switch checked={checkedEpilepsy}
															onClick={handleChangeEpilepsy}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>
													<div className="col-md-3" >
														<InputLabel >Asthma</InputLabel>

														<Switch checked={checkedAsthma}
															onClick={handleChangeAsthma}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>


													<div className="col-md-3" >
														<InputLabel >Diabetes</InputLabel>

														<Switch checked={checkedDiabetes}
															onClick={handleChangeDiabetes}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>
													<div className="col-md-3" >
														<InputLabel >Hypertension</InputLabel>

														<Switch checked={checkedHypertension}
															onClick={handleChangeHypertension}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>
													<div className="col-md-3" >
														<InputLabel >Tuberculosis</InputLabel>

														<Switch checked={checkedTuberculosis}
															onClick={handleChangeTuberculosis}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>
													<div className="col-md-3" >
														<InputLabel >Heartdisease</InputLabel>

														<Switch checked={checkedHeartdisease}
															onClick={handleChangeHeartdisease}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>
													<div className="col-md-3" >
														<InputLabel >Malaria</InputLabel>

														<Switch checked={checkedMalaria}
															onClick={handleChangeMalaria}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>
													<div className="col-md-3" >
														<InputLabel >Operations</InputLabel>

														<Switch checked={checkedOperations}
															onClick={handleChangeOperations}
														//inputProps={{ 'aria-label': 'controlled' }}
														/>
													</div>

													<div className="col-md-3" >
														<InputLabel >Physicaldisablilities</InputLabel>
														<Switch checked={checkedPhysicaldisablilities}
															onClick={handleChangePhysicaldisablilities}
														/>
													</div>

												</div>

												<div className="col-md-6" >
													<FormControl sx={{ m: 1, minWidth: 354 }}>
														<TextField
															id="outlined-multiline-static"
															label="Others"
															name="Others"
															multiline
															rows={3} value={InputDescription} onChange={e => setInputDescription(e.target.value)}

														/>
													</FormControl>



												</div>
												<div className="col-md-6" >

													<FormControl sx={{ m: 1, minWidth: 354 }}>
														<TextField
															id="outlined-multiline-static"
															label="Allergies (if any)"
															name="Description"
															multiline
															rows={3} value={InputOthers} onChange={e => setInputOthers(e.target.value)}

														/>
													</FormControl>



												</div>

											</div>
										</div>
										<div className="row">
											<div className="col-md-12 row" >
												<div className="col-md-6 row" >
													<div className="col-md-12" >
														<div className="col-md-12" >
															<label for="review" className="col-md-12">Have you ever worked as a domestic helper?</label>


															<Switch checked={checkedDomestichelper}
																onClick={handleChangeDomestichelper}
															//inputProps={{ 'aria-label': 'controlled' }}
															/>


														</div>

													</div>
													<div className="col-md-12" >
														<div className="col-md-12" >
															<label for="review" className="col-md-12">Are you currently working as a domestic helper?</label>
															<Switch checked={checkedcurrentDomestichelper}
																onClick={handleChangecurrentDomestichelper}
															//inputProps={{ 'aria-label': 'controlled' }}
															/>
														</div>

													</div>
													<div className="col-md-12" >

														<div className="col-md-12 row" >


															{/*}  {inputListjobscope.map((x, i) => (
									<> 
										<div  className="col-md-9" style={{paddingTop:'0px'}}>
										<FormControl sx={{ m: 1, minWidth: 249 }}>     
									
										<InputLabel >Preferred Job scope</InputLabel>
											<Select name={`job_scope${i}`} label="Job Scope" class="form-control" onChange={e => handleInputChangejobscope(e, i)} >                              
												<MenuItem value="Housechores" Selected ={x.jobscope =='Housechores'? true :false}>House chores</MenuItem>
													<MenuItem value="Cooking" Selected ={x.jobscope =='Cooking'? true :false}>Cooking</MenuItem>
													<MenuItem value="Marketing" Selected ={x.jobscope =='Marketing'? true :false}>Marketing</MenuItem>
													<MenuItem value="Gardening" Selected ={x.jobscope =='Gardening'? true :false}>Gardening</MenuItem>
													<MenuItem value="ElderCare" Selected ={x.jobscope =='ElderCare'? true :false}>Elder Care</MenuItem>
													<MenuItem value="InfantCare" Selected ={x.jobscope =='InfantCare'? true :false}>Infant Care</MenuItem>
													<MenuItem value="ChildCare" Selected ={x.jobscope =='Child Care'? true :false}>Child Care</MenuItem>
													<MenuItem value="PetCare" Selected ={x.jobscope =='PetCare'? true :false}>Pet Care</MenuItem>
																					
											</Select>
											</FormControl>
										</div>
										
												{((inputListjobscope.length !== 1) && (inputListjobscope.length- 1 === i) )&&
												<div className="col-md-1" style={{paddingTop:'14px'}}>
												<button className="btn1 btn-danger" type ="button" onClick={() => handleRemoveClickjobscope(i)}><i class="fa fa-trash" aria-hidden="true"></i></button>
												</div>
												}
											
											<div className="col-md-1" style={{paddingTop:'14px'}}>
												{inputListjobscope.length - 1 === i &&
												<button className="btn1 btn-info" type ="button" onClick={handleAddClickjobscope}><i class="fa fa-plus" aria-hidden="true"></i></button>
												}
													</div>
											
											
												</>     
										))} */}
														</div>

													</div>
													<div className="col-md-12" >


														<div className="col-md-12 row">
															{inputListcook.map((x, i) => (
																<>
																	<div className="col-md-9" style={{ paddingTop: '0px' }}>
																		<FormControl sx={{ m: 1, minWidth: 250 }}>
																			<InputLabel >Cooking skill</InputLabel>
																			<Select name={`cooking_skill${i}`} label="Cooking skill" class="form-control" onChange={e => handleInputChangecook(e, i)} >
																				<MenuItem value="Malayfood" Selected={x.cook == 'Malayfood' ? true : false}>Malay food</MenuItem>
																				<MenuItem value="Chinesefood" Selected={x.cook == 'Chinesefood' ? true : false}>Chinese food</MenuItem>
																				<MenuItem value="Westernfood" Selected={x.cook == 'Westernfood' ? true : false}>Western food</MenuItem>
																				<MenuItem value="Indianfood" Selected={x.cook == 'Indianfood' ? true : false}>Indian food</MenuItem>
																				<MenuItem value="Arabfood" Selected={x.cook == 'Arabfood' ? true : false}>Arab food</MenuItem>
																				<MenuItem value="NoRequirement" Selected={x.cook == 'NoRequirement' ? true : false}>No Requirement</MenuItem>
																			</Select>

																		</FormControl>
																	</div>




																	{((inputListcook.length !== 1) && (inputListcook.length - 1 === i)) &&
																		<div className="col-md-1" style={{ paddingTop: '14px' }}>
																			<button className="btn1 btn-danger" type="button" onClick={() => handleRemoveClickcook(i)}><i class="fa fa-trash" aria-hidden="true"></i></button>
																		</div>
																	}

																	<div className="col-md-1" style={{ paddingTop: '14px' }}>
																		{inputListcook.length - 1 === i &&
																			<button className="btn1 btn-info" type="button" onClick={handleAddClickcook}><i class="fa fa-plus" aria-hidden="true"></i></button>
																		}
																	</div>

																</>
															))}






														</div>

													</div>

													<div className="col-md-12" >
														<div className="col-md-12" >
															<label for="review" className="col-md-12"> &nbsp;Preferred for rest day:</label>
														</div>
														<div className="col-md-12">

															<div className="col-md-4" >
																<FormControl sx={{ m: 1, minWidth: 85 }}>
																	<InputLabel >days</InputLabel>
																	<Select name="restdays" label="days"  >

																		<MenuItem value="1">1 </MenuItem>
																		<MenuItem value="2">2 </MenuItem>
																		<MenuItem value="3">3 </MenuItem>
																		<MenuItem value="4">4 </MenuItem>
																		<MenuItem value="5">5 </MenuItem>
																		<MenuItem value="6">6 </MenuItem>
																	</Select>
																</FormControl>
															</div>

															<div className="col-md-8"><br />rest day(s) per month
															</div>

														</div>

													</div>
													<div className="col-md-12" >
														<div className="col-md-12" >
															<label for="review" className="col-md-12">&nbsp;Preference for accomodation:</label>
														</div>
														<div className="col-md-12 row ">
															{inputListaccom.map((x, i) => (
																<>
																	<div className="col-md-9" style={{ paddingTop: '0px' }}>
																		<FormControl sx={{ m: 1, minWidth: 250 }}>
																			<InputLabel >Accommodation</InputLabel>
																			<Select name="accommodation" label="accommodation" onChange={e => handleInputChangeaccom(e, i)} >

																				<MenuItem value="Inseparateroom" Selected={x.accom == 'Inseparateroom' ? true : false}>In separate room</MenuItem>
																				<MenuItem value="Share" Selected={x.accom == 'Share' ? true : false}>Share</MenuItem>
																				<MenuItem value="Flexible" Selected={x.accom == 'Flexible' ? true : false}>Flexible</MenuItem>
																				<MenuItem value="ToBeDiscussed" Selected={x.accom == 'ToBeDiscussed' ? true : false}>To Be Discussed</MenuItem>

																			</Select>
																		</FormControl>
																	</div>
																	{((inputListaccom.length !== 1) && (inputListaccom.length - 1 === i)) &&
																		<div className="col-md-1" style={{ paddingTop: '14px' }}>
																			<button className="btn1 btn-danger" type="button" onClick={() => handleRemoveClickaccom(i)}><i class="fa fa-trash" aria-hidden="true"></i></button>
																		</div>
																	}

																	<div className="col-md-1" style={{ paddingTop: '14px' }}>
																		{inputListaccom.length - 1 === i &&
																			<button className="btn1 btn-info" type="button" onClick={handleAddClickaccom}><i class="fa fa-plus" aria-hidden="true"></i></button>
																		}
																	</div>




																</>
															))}






														</div>


														<div className="col-md-12 row" >
															<div className="col-md-12" >
																<FormControl sx={{ m: 1, minWidth: 282 }}>
																	<TextField
																		id="outlined-multiline-static"
																		label="Other skills"
																		name="other_skills"
																		multiline
																		rows={3}

																	/>
																</FormControl>

															</div>
														</div>
														<div className="col-md-12 row" >
															<div className="col-md-12" >
																<FormControl sx={{ m: 1, minWidth: 282 }}>
																	<TextField
																		id="outlined-multiline-static"
																		label="Expected Salary"
																		name="ExpectedSalary"
																		value={getExpectedSalary} onChange={e => setExpectedSalary(e.target.value)}
																		setExpectedSalary
																	/>
																</FormControl>

															</div>

														</div>

													</div>

												</div>
												<div className="col-md-6 row" >
													<div className="col-md-12 row" >
														<div className="col-md-12 " >
															<label >&nbsp;Which country have you ever worked in?</label>
															<p> &nbsp;(if any, you may select more than one)</p>
														</div>


														{country.map((code, j) => getCountryeverworked[j] != undefined ?
															<>
																{country.map((code2, i) => (

																	getCountryeverworked[j] == code2.CountryID
																	&&
																	<div className="col-md-5 row">
																		<div for="review" className="col-md-1" ><input type="checkbox" name={`everworked`} style={{ width: '16px', height: '16px' }} value={code.CountryID} checked /></div>
																		<div for="review" className="col-md-9"><p style={{ paddingTop: '4px', }}>{code2.CountryName}</p></div>
																	</div>


																))}</>
															:
															<div className="col-md-5 row">
																<div for="review" className="col-md-1" ><input type="checkbox" name={`everworked`} style={{ width: '16px', height: '16px' }} value={code.CountryID} /></div>
																<div for="review" className="col-md-9"><p style={{ paddingTop: '4px', }}>{code.CountryName}</p></div>
															</div>
														)}

														<div className="col-md-12 row">
															<div for="review" className="col-md-1 " ><input type="checkbox" name="everworked1" style={{ width: '16px', height: '16px' }} value='other' /></div>
															<div for="review" className="col-md-3 row " >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p style={{ marginLeft: '-8px', paddingTop: '4px', }}>Other</p></div>
															<div for="review" className="col-md-7"><input type="text" className="form-control" /></div>

														</div>

													</div>


													<div className="col-md-12 row" >
														<div className="col-md-12" >
															<label >&nbsp;Which country are you currently located?</label>
														</div>
														<FormControl sx={{ m: 1, minWidth: 251 }}>
															<InputLabel >Country</InputLabel>
															<Select label="Country" name={`currentlocated`} value={InputCurrentlyLocated} onChange={e => setInputCurrentlyLocated(e.target.value)}  >
																<MenuItem>SELECT</MenuItem>
																{country.map((code, i) => (
																	<MenuItem value={code.CountryID} key={i} >{code.CountryName}</MenuItem>
																))}
															</Select>

														</FormControl>




														<div className="col-md-12 row">
															<div for="review" className="col-md-1" ><input type="checkbox" name="PreferredContact1" style={{ width: '16px', height: '16px' }} value='other' /></div>
															<div for="review" className="col-md-3 row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p style={{ marginLeft: '-8px', paddingTop: '4px', }}>Other</p></div>
															<div for="review" className="col-md-7"><input type="text" className="form-control" />
															</div>

														</div>
													</div>
													<div className="col-md-12 row" >
														<div className="col-md-12">
															<label >&nbsp;Which country do you prefer to work in?</label>
														</div>


														{country.map((code, j) => getCountryPrefertowork[j] != undefined ?
															<>
																{country.map((code2, i) => (

																	getCountryPrefertowork[j] == code2.CountryID
																	&&
																	<div className="col-md-5 row">
																		<div for="review" className="col-md-1" ><input type="checkbox" name={`CountryPrefertowork`} style={{ width: '16px', height: '16px' }} value={code.CountryID} checked /></div>
																		<div for="review" className="col-md-9"><p style={{ paddingTop: '4px', }}>{code2.CountryName}</p></div>
																	</div>


																))}</>
															:
															<div className="col-md-5 row">
																<div for="review" className="col-md-1" ><input type="checkbox" name={`CountryPrefertowork`} style={{ width: '16px', height: '16px' }} value={code.CountryID} /></div>
																<div for="review" className="col-md-9"><p style={{ paddingTop: '4px', }}>{code.CountryName}</p></div>
															</div>
														)}

														<div className="col-md-12 row">
															<div for="review" className="col-md-1" ><input type="checkbox" name="PreferredContact1" style={{ width: '16px', height: '16px' }} value='other' /></div>
															<div for="review" className="col-md-5 row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p style={{ marginLeft: '-8px', paddingTop: '4px', }}>No Preference</p></div>

														</div>
													</div>


												</div>

											</div>
											<div className="col-md-12">
												<div className="col-md-12">
													<div className="col-md-12 ">

														<div className="col-md-8 row">

															<div className="col-md-5">
																{((gifbutto != '') && (gifbutto != null)) ?
																	<><img src={gifbutto} style={{ width: '100px;', height: '46px', border: '2.5px solid #557191', borderRadius: '30px' }}></img></>
																	:
																	<><Button className="btn1 btn-outline btn-white" type="submit" >Save</Button></>
																}

															</div>
															{/*} <div className="col-md-4">
																		
																	<a href="/helper_details1"><Button className="btn1 btn-outline btn-white" size="small" type="button">Save</Button></a>

																</div>*/}
															<div className="col-md-3">
																<a href="/helper_details"><Button className="btn1 btn-outline btn-white" size="small" type="button" >Reset</Button></a>


															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</form>
								</div>
							</div>

						</Row>


					</FormGroup>









				</TabPanel>
				<TabPanel>
					{/* <div className="tab-pane fade"> */}
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Birth Certificate</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Passport</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Work permit</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">SIP</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Employment Contract</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Education Certificate</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>
					<div className="account-setting">
						<h5 className="f-w-600 f-16">Medical Report</h5>
						<Card>

							<CardBody>
								<MyDropzone />
							</CardBody>
						</Card>
					</div>



					{/* </div> */}
				</TabPanel>
				<TabPanel>

				</TabPanel>
			</Tabs>

		</Fragment>
	);
};

export default TabsetUser;

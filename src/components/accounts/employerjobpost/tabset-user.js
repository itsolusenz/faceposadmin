import React, { Fragment, useState, useEffect } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Card, CardBody, CardHeader, Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import MyDropzone from "../../common/dropzone";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsCookie from 'js-cookie';
import Moment from 'moment';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import Moment from 'moment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
//import { useRouter } from 'next/router';
const TabsetUser = () => {


  const { jobid } = useParams();
  console.log('jobid', jobid)
  /*const router = useRouter()
  const linkk = router.asPath;
  const ss = linkk.split('=');*/
  const idd = '';
  const [startDate, setStartDate] = useState(new Date());
  console.log('queryrouer4', idd);
  const [getuser, setUser] = useState([]);
  const [employer, setEmp] = useState([]);
  const [helper, setHelper] = useState([]);
  const [gifbutto, setGifbutt] = useState('');
  const [country, setCountry] = useState([]);
  const [JobPostTittle, changeJobPostTittle] = useState([]);


  const [setjobscope, changejobscope] = useState([false, false, false, false, false, false, false, false]);

  const [jobscope1, changejobscope1] = React.useState(false);
  const [jobscope2, changejobscope2] = React.useState(false);
  const [jobscope3, changejobscope3] = React.useState(false);
  const [jobscope4, changejobscope4] = React.useState(false);
  const [jobscope5, changejobscope5] = React.useState(false);
  const [jobscope6, changejobscope6] = React.useState(false);
  const [jobscope7, changejobscope7] = React.useState(false);
  const [jobscope8, changejobscope8] = React.useState(false);

  const [Elder, changeElder] = useState([]);
  const [Adult, changeAdult] = useState([]);
  const [Teen, changeTeen] = useState([]);
  const [Child, changeChild] = useState([]);
  const [Baby, changeBaby] = useState([]);


  const [addskill, setaddskill] = useState([]);
  const [postdetails, setpostform] = useState([]);


  const [InputDietaryPreference, setInputDietaryPreference] = useState([]);
  const [InputLanguage1, setInputLanguage1] = React.useState(false);
  const [InputLanguage2, setInputLanguage2] = React.useState(false);
  const [InputLanguage3, setInputLanguage3] = React.useState(false);
  const [InputLanguage4, setInputLanguage4] = React.useState(false);
  const [InputLanguage5, setInputLanguage5] = React.useState(false);
  const [InputLanguage6, setInputLanguage6] = React.useState(false);

  const [Inputcountry1, setInputcountry1] = React.useState(false);
  const [Inputcountry2, setInputcountry2] = React.useState(false);
  const [Inputcountry3, setInputcountry3] = React.useState(false);
  const [Inputcountry4, setInputcountry4] = React.useState(false);
  const [Inputcountry5, setInputcountry5] = React.useState(false);
  const [Inputcountry6, setInputcountry6] = React.useState(false);
  const [Inputcountry7, setInputcountry7] = React.useState(false);
  const [Inputcountry8, setInputcountry8] = React.useState(false);
  const [Inputcountry9, setInputcountry9] = React.useState(false);

  const [cooking1, setcooking1] = React.useState(false);
  const [cooking2, setcooking2] = React.useState(false);
  const [cooking3, setcooking3] = React.useState(false);
  const [cooking4, setcooking4] = React.useState(false);
  const [cooking5, setcooking5] = React.useState(false);
  const [cooking6, setcooking6] = React.useState(false);

  const [religion1, setreligion1] = React.useState(false);
  const [religion2, setreligion2] = React.useState(false);
  const [religion3, setreligion3] = React.useState(false);
  const [religion4, setreligion4] = React.useState(false);



  const [AdditionalRequirements, changeAdditionalRequirements] = useState([]);
  const [InputSalary, setInputSalary] = useState([]);
  const [InputOffDay, setInputOffDay] = useState([]);
  const [InputExper, setInputExper] = useState([]);
  const [InputAccommodation1, setInputAccommodation1] = useState([]);
  const [InputAccommodation2, setInputAccommodation2] = useState([]);
  const [InputAccommodation3, setInputAccommodation3] = useState([]);
  const [InputAccommodation4, setInputAccommodation4] = useState([]);

  const [Inputage, setInputage] = useState([]);
  const [Inputhousing, setInputhousing] = useState([]);
  const [startdatevalue, setstartdateValue] = React.useState(null);
  const [err, setErr] = useState([]);
  const [suc, setSuc] = useState([]);


  const [inputListpet, setInputListpet] = useState([{ pet: "" }]);

  const handleInputChangepet = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputListpet];
    list[index][name] = value;
    setInputListpet(list);
  };

  // handle click event of the Remove button
  const handleRemoveClickpet = index => {

    const list = [...inputListpet];
    list.splice(index, 1);
    setInputListpet(list);
  };
  const handleAddClickpet = () => {
    setInputListpet([...inputListpet, { pet: "" }]);
  };

  useEffect(() => {




    const loadUsers = async () => {
      var ciphertext = jsCookie.get('USERID');

      if (ciphertext != '' && ciphertext != null && ciphertext != undefined) {
        // var bytes = CryptoJS.AES.decrypt(ciphertext, 'my-secret-key@123');
        //const emp_id = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        const response = await axios.get("https://api.laabamone.com/api/v1/GetUserByID?ID=" + ciphertext);
        console.log('userdetails', response.data);
        setUser(response.data);
      }

    }
    const loadCountry = async () => {
      const responsec = await axios.get("https://api.laabamone.com/api/v1/Masters/Country");
      setCountry(responsec.data.$values);
      console.log('data', responsec.data.$values);

    }
    const loadpostform = async () => {

      const responsec = await axios.get("https://api.laabamone.com/api/v1/Masters/GetJobPostbyID?ID=" + jobid);
      setpostform(responsec.data);
      setaddskill(responsec.data.AdditionalBenefits);
      changeElder(responsec.data.Elder);
      changeAdult(responsec.data.Adult);
      changeTeen(responsec.data.Teen);
      changeChild(responsec.data.Child);
      changeBaby(responsec.data.Baby);
      changeJobPostTittle(responsec.data.PostTitle);


      const iss = responsec.data.SpokenLanguage.split(',');
      setInputLanguage1(iss[0] == 'English' ? true : false)
      setInputLanguage2(iss[1] == 'Mandarin' ? true : false)
      setInputLanguage3(iss[2] == 'Bahasa' ? true : false)
      setInputLanguage4(iss[3] == 'Tamil' ? true : false)
      setInputLanguage5(iss[4] == 'Hokkien' ? true : false)
      setInputLanguage6(iss[5] == 'Cantonese' ? true : false)

      const ass = responsec.data.Accomodation.split(',');
      setInputAccommodation1(ass[0] == '1' ? true : false)
      setInputAccommodation2(ass[1] == '1' ? true : false)
      setInputAccommodation3(ass[2] == '1' ? true : false)
      setInputAccommodation4(ass[3] == '1' ? true : false)

      const rss = responsec.data.Religion.split(',');
      setreligion1(rss[0] == '1' ? true : false)
      setreligion2(rss[1] == '1' ? true : false)
      setreligion3(rss[2] == '1' ? true : false)
      setreligion4(rss[3] == '1' ? true : false)


      const css = responsec.data.CookingSkill.split(',');
      setcooking1(css[0] == '1' ? true : false)
      setcooking2(css[1] == '1' ? true : false)
      setcooking3(css[2] == '1' ? true : false)
      setcooking4(css[3] == '1' ? true : false)
      setcooking5(css[4] == '1' ? true : false)
      setcooking6(css[5] == '1' ? true : false)

      const ss = responsec.data.JobScope.split(',');
      changejobscope1(ss[0] == '1' ? true : false)
      changejobscope2(ss[1] == '1' ? true : false)
      changejobscope3(ss[2] == '1' ? true : false)
      changejobscope4(ss[3] == '1' ? true : false)
      changejobscope5(ss[4] == '1' ? true : false)
      changejobscope6(ss[5] == '1' ? true : false)
      changejobscope7(ss[6] == '1' ? true : false)
      changejobscope8(ss[7] == '1' ? true : false)



      //changejobscope1(!jobscope1);
      setInputhousing(responsec.data.Housing);
      setstartdateValue(responsec.data.WorkStartDate);
      setInputage(responsec.data.AgeRange);
      setInputExper(responsec.data.YearofExperience);
      setInputDietaryPreference(responsec.data.DietPreference);
      setInputSalary(responsec.data.Salary);
      setInputOffDay(responsec.data.OffDay);
      changeAdditionalRequirements(responsec.data.AdditionalRequirements)

      console.log('dddd', responsec.data);
      console.log('postform', responsec.data);

    }
    const loadEmp = async () => {
      const emp_id = jsCookie.get('empid');
      const response2 = await axios.get("https://api.laabamone.com/api/v1/Masters/GetEmployerListByUserID?ID=" + emp_id);
      console.log('empdetails', response2.data);
      setEmp(response2.data);

    }
    if (jobid != '' && jobid != null && jobid != undefined) {
      loadpostform();
    }

    loadEmp();
    loadUsers();
    loadCountry();

  }, [])
  const Savepet = async (e) => {

    console.log('e', e);

    console.log('inputListpet', inputListpet);
    let p = '';
    for (p = '0'; p < inputListpet.length; p++) {


      var passdata = {
        "PetId": 0,
        "TypeOfPet": inputListpet[p].typeofpet,
        "Number": inputListpet[p].petcount,
        "JobpostId": e
      };

      const responseemp = await fetch("https://api.laabamone.com/api/v1/Masters/CreatePet", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(passdata),

      });
      const datapet = await responseemp.json();
      console.log('datapet', datapet);


      const res = datapet.ResponseCode;
      if (res == 'Created') {
        // setGifbutt(''); 
        // setSuc('Successfully Updated..');      
      }
    }
    setGifbutt('');
    setSuc('Successfully Updated..');

  }
  const registerEmpPost = async event => {
    event.preventDefault();
    // setGifbutt('/assets/images/loading.gif');   










    let StartDate2 = startdatevalue;
    let StartDate1 = Moment(`${StartDate2}`).format('DD/MM/YYYY');
    let sdate = StartDate1.split("/");
    let StartDate11 = sdate[2] + '-' + sdate[1] + '-' + sdate[0];

    let js1 = jobscope1 ? '1' : '0';
    let js2 = jobscope2 ? '1' : '0';
    let js3 = jobscope3 ? '1' : '0';
    let js4 = jobscope4 ? '1' : '0';
    let js5 = jobscope5 ? '1' : '0';
    let js6 = jobscope6 ? '1' : '0';
    let js7 = jobscope7 ? '1' : '0';
    let js8 = jobscope8 ? '1' : '0';

    let acco1 = InputAccommodation1 ? '0' : '1';
    let acco2 = InputAccommodation2 ? '0' : '1';
    let acco3 = InputAccommodation3 ? '0' : '1';
    let acco4 = InputAccommodation4 ? '0' : '1';


    let sl1 = InputLanguage1 ? 'English' : '0';
    let sl2 = InputLanguage2 ? 'Mandarin' : '0';
    let sl3 = InputLanguage3 ? 'Bahasa' : '0';
    let sl4 = InputLanguage4 ? 'Tamil' : '0';
    let sl5 = InputLanguage5 ? 'Hokkien' : '0';
    let sl6 = InputLanguage6 ? 'Cantonese' : '0';

    let cook1 = cooking1 ? '1' : '0';
    let cook2 = cooking2 ? '1' : '0';
    let cook3 = cooking3 ? '1' : '0';
    let cook4 = cooking4 ? '1' : '0';
    let cook5 = cooking5 ? '1' : '0';
    let cook6 = cooking6 ? '1' : '0';

    let rel1 = religion1 ? '1' : '0';
    let rel2 = religion2 ? '1' : '0';
    let rel3 = religion3 ? '1' : '0';
    let rel4 = religion4 ? '1' : '0';
    let rel5 = cooking5 ? '1' : '0';
    let rel6 = cooking6 ? '1' : '0';

    let eld = Elder;
    let ad = Adult;
    let tee = Teen;
    let chi = Child;
    let bab = Baby;

    let s = '';
    let str = '';

    let ico1 = Inputcountry1 ? '1' : '0';
    let ico2 = Inputcountry2 ? '1' : '0';
    let ico3 = Inputcountry3 ? '1' : '0';
    let ico4 = Inputcountry4 ? '1' : '0';
    let ico5 = Inputcountry5 ? '1' : '0';
    let ico6 = Inputcountry6 ? '1' : '0';
    let ico7 = Inputcountry7 ? '1' : '0';
    //let ico8=   Inputcountry8 ?  '1' :'0';


    let Jobsc = js1 + ',' + js2 + ',' + js3 + ',' + js4 + ',' + js5 + ',' + js6 + ',' + js7 + ',' + js8;
    let slang = sl1 + ',' + sl2 + ',' + sl3 + ',' + sl4 + ',' + sl5 + ',' + sl6;
    let acoomo = acco1 + ',' + acco2 + ',' + acco3 + ',' + acco4;
    let cooki = cook1 + ',' + cook2 + ',' + cook3 + ',' + cook4 + ',' + cook5 + ',' + sl6;
    let relg = rel1 + ',' + rel2 + ',' + rel3 + ',' + rel4;
    let count = ico1 + ',' + ico2 + ',' + ico3 + ',' + ico4 + ',' + ico5 + ',' + ico6 + ',' + ico7;





    console.log('hobsceope', Jobsc)
    console.log('spokenlan', slang)
    console.log('accom', acoomo)
    console.log('cooking', cooki)
    const JobPostId11 = jsCookie.get('JobPostId');

    setGifbutt('');
    if (JobPostId11 != '' && JobPostId11 != null && JobPostId11 != undefined) {

      //var bytes = CryptoJS.AES.decrypt(JobPostId, 'my-secret-key@123');
      // const JobPostId11 = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));          

      var passdata = {
        "JobPostId": JobPostId11,
        "EmployerId": postdetails.EmployerId,
        "PostTitle": JobPostTittle,
        "JobScope": Jobsc,
        "CookingSkill": cooki,
        "AdditionalRequirements": AdditionalRequirements,
        "Elder": eld,
        "Adult": ad,
        "Teen": tee,
        "Child": chi,
        "Baby": bab,
        "Housing": Inputhousing,
        "WorkStartDate": StartDate11,
        "AgeRange": Inputage,
        "YearofExperience": InputExper,
        "Nationality": count,
        "Religion": relg,
        "DietPreference": InputDietaryPreference,
        "SpokenLanguage": slang,
        "Salary": InputSalary,
        "OffDay": InputOffDay,
        "Accomodation": "string",
        "AdditionalBenefits": addskill
      };


      const responseemp = await fetch("https://api.laabamone.com/api/v1/Masters/UpdateJobPost", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(passdata),

      });
      const dataemp = await responseemp.json();
      console.log('dataed', dataemp);


      const res = dataemp.ResponseCode;
      if (res == 'Created') {

        //setGifbutt('/assets/images/loading.gif'); 
        setErr('');
        setSuc('Successfully Updated..');
        setGifbutt('');
        // window.location.href = "/empmyaccount";   

      }
      else {
        setGifbutt('');
        const errmessage = dataemp.title;
        setErr(errmessage);
        setSuc('');
      }



    }
    else {


      var passdata = {
        "JobPostId": 0,
        "EmployerId": employer.EmployerId,
        "PostTitle": JobPostTittle,
        "JobScope": Jobsc,
        "CookingSkill": cooki,
        "AdditionalRequirements": AdditionalRequirements,
        "Elder": eld,
        "Adult": ad,
        "Teen": tee,
        "Child": chi,
        "Baby": bab,
        "Housing": Inputhousing,
        "WorkStartDate": StartDate11,
        "AgeRange": Inputage,
        "YearofExperience": InputExper,
        "Nationality": 0,
        "Religion": relg,
        "DietPreference": InputDietaryPreference,
        "SpokenLanguage": slang,
        "Salary": InputSalary,
        "OffDay": InputOffDay,
        "Accomodation": acoomo,
        "AdditionalBenefits": addskill
      };

      const response = await fetch("https://api.laabamone.com/api/v1/Masters/CreateJobPost", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(passdata),

      });
      const data = await response.json();
      console.log('response', data);
      const res = data.ResponseCode;
      if (res == 'Created') {

        let idd = data.Item.JobPostId;
        setErr('');
        Savepet(idd);

      }
      else {
        setGifbutt('');
        const errmessage = data.title;
        console.log('responseer', errmessage);
        setErr(errmessage);
      }

    }
  }

  console.log('jobscope', jobscope1);


  return (
    <Fragment>


      <Row>

        <form className="theme-form" onSubmit={registerEmpPost}  >
          <div className=" theme-form1 row">
            <p ><h5 style={{ color: 'red' }}>{err}</h5></p>

            <p ><h5 style={{ color: 'green' }}>{suc}</h5></p>
            <div className="col-md-6">
              <div className="col-md-12">

                <div className="col-md-12">

                  <FormControl sx={{ minWidth: 415 }}>

                    <TextField label="Job Post Tittle" value="" name="JobPostTittle" value={JobPostTittle} onChange={(e) => changeJobPostTittle(e.target.value)} variant="outlined" />

                  </FormControl>

                </div>


              </div>

              <div className="col-md-12" >  <br /><br />
                <label for="review" className="col-md-12"><h5>Job requirement </h5></label>


                <div className="col-md-12">
                  <label for="review" >Job scope</label>

                </div>



                <div className="col-md-3 "><FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="jobscope1" value={jobscope1} control={<Checkbox />} checked={jobscope1} label="House chores" onChange={() => changejobscope1(!jobscope1)} /></div>
                <div className="col-md-3"><FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="jobscope2" value={jobscope2} control={<Checkbox />} checked={jobscope2} label="Cooking" onChange={() => changejobscope2(!jobscope2)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="jobscope3" value={jobscope3} control={<Checkbox />} checked={jobscope3} label="Marketing" onChange={() => changejobscope3(!jobscope3)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="jobscope4" value={jobscope4} control={<Checkbox />} checked={jobscope4} label="Gardening" onChange={() => changejobscope4(!jobscope4)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="jobscope5" value={jobscope5} control={<Checkbox />} checked={jobscope5} label="Eldercare" onChange={() => changejobscope5(!jobscope5)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="jobscope6" value={jobscope6} control={<Checkbox />} checked={jobscope6} label="Infant Care" onChange={() => changejobscope6(!jobscope6)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="jobscope7" value={jobscope7} control={<Checkbox />} checked={jobscope7} label="Child care" onChange={() => changejobscope7(!jobscope7)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="jobscope8" value={jobscope8} control={<Checkbox />} checked={jobscope8} label="Pet care" onChange={() => changejobscope8(!jobscope8)} /></div>






              </div>
              <div className="col-md-12" >  <br /><br />



                <div className="col-md-12">
                  <label for="review" >Cookingskill</label>

                </div>





                <div className="col-md-3 "><FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="cooking1" value={cooking1} control={<Checkbox />} checked={cooking1} label=" Malay food" onChange={() => setcooking1(!cooking1)} /></div>
                <div className="col-md-3"><FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="cooking2" value={cooking2} control={<Checkbox />} checked={cooking2} label="Chinese food" onChange={() => setcooking2(!cooking2)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="cooking3" value={cooking3} control={<Checkbox />} checked={cooking3} label="Western food" onChange={() => setcooking3(!cooking3)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="cooking4" value={cooking4} control={<Checkbox />} checked={cooking4} label="Indian food" onChange={() => setcooking4(!cooking4)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="cooking5" value={cooking5} control={<Checkbox />} checked={cooking5} label="Arab food" onChange={() => setcooking5(!cooking5)} /></div>
                <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="cooking6" value={cooking6} control={<Checkbox />} checked={cooking6} label="No Requirement" onChange={() => setcooking6(!cooking6)} /></div>






              </div>

              <div className="col-md-12" >




                <div className="col-md-12">

                  <FormControl sx={{ m: 1, minWidth: 480 }}>

                    <TextField label="Additionalskill"
                      name="additionalskill" required
                      variant="outlined"
                      value={addskill} onChange={(e) => setaddskill(e.target.value)}
                    />

                  </FormControl>
                </div>

              </div>



              <div className="col-md-12 row" > <br /> <br />
                <label for="review" className="col-md-12 "><h5>Work environment </h5></label>


                <div className="col-md-12 ">
                  <label for="review" >Family size</label>

                </div>





                <div className="col-md-7 "><h6><br />1)Elderly (65 yr old & above)</h6>
                </div>
                <div className="col-md-4 row">
                  <FormControl sx={{ m: 1, minWidth: 159 }}>
                    <TextField type="number" required name="Elder" value={Elder} onChange={(e) => changeElder(e.target.value)} label="Elder count" />
                  </FormControl>
                </div>
                <div className="col-md-7 "><h6><br />2)Adult (21~ 64)</h6>
                </div>

                <div className="col-md-4 row">
                  <FormControl sx={{ m: 1, minWidth: 159 }}>
                    <TextField type="number" required name="adult" value={Adult} onChange={(e) => changeAdult(e.target.value)} label="Adult count" />
                  </FormControl>
                </div>
                <div className="col-md-7"><h6><br />3)Teen (13 ~ 20)</h6>
                </div>
                <div className="col-md-4 row">
                  <FormControl sx={{ m: 1, minWidth: 159 }}>
                    <TextField type="number" required name="Teen" value={Teen} onChange={(e) => changeTeen(e.target.value)} label="Teen count" />
                  </FormControl>
                </div>
                <div className="col-md-7 "><h6><br />4)Child (4 ~ 12)</h6>
                </div>

                <div className="col-md-4 row">
                  <FormControl sx={{ m: 1, minWidth: 159 }}>
                    <TextField type="number" required value={Child} onChange={(e) => changeChild(e.target.value)} name="Child" label="Child count" />
                  </FormControl>
                </div>

                <div className="col-md-7 "><h6><br />5)Baby (0 ~ 3)</h6>
                </div>
                <div className="col-md-4 row">
                  <FormControl sx={{ m: 1, minWidth: 159 }}>
                    <TextField type="number" required value={Baby} onChange={(e) => changeBaby(e.target.value)} name="Baby" label="Baby count" />
                  </FormControl>
                </div>







              </div>

              <div className="col-md-12" >



                <div className="col-md-12">
                  <label for="review" >Pet</label>

                </div>
                {inputListpet.map((x, i) => (
                  <>
                    <div className="col-md-6">
                      <FormControl sx={{ m: 1, minWidth: 210 }}>
                        <InputLabel >Type of pet</InputLabel>
                        <Select name="typeofpet" name={`typeofpet`} onChange={e => handleInputChangepet(e, i)} label="Dietry Preference" required>
                          <MenuItem value="1">pet 1</MenuItem>
                          <MenuItem value="2">pet 2</MenuItem>
                          <MenuItem value="3">Pet 3</MenuItem>
                        </Select>
                      </FormControl>


                    </div>
                    <div className="col-md-4 row">
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <TextField type="number" required name={`petcount`} onChange={e => handleInputChangepet(e, i)} label="pet count" />
                      </FormControl>
                    </div>
                    {((inputListpet.length !== 1) && (inputListpet.length - 1 === i)) &&

                      <div className="col-md-1">
                        <br />
                        <button className="btn1 btn-danger" type="button" onClick={() => handleRemoveClickpet(i)}><i class="fa fa-trash" aria-hidden="true"></i></button>

                      </div>
                    }
                    <div className="col-md-1"> <br />
                      {inputListpet.length - 1 === i &&
                        <button className="btn1 btn-info" type="button" onClick={handleAddClickpet}><i class="fa fa-plus" aria-hidden="true"></i></button>
                      }
                    </div>

                  </>
                ))}




              </div>




















            </div>



            <div className="col-md-6">
              <div className="col-md-12" >

                <div className="col-md-6 row">


                  <FormControl sx={{ m: 1, minWidth: 235 }}>
                    <InputLabel >Housing</InputLabel>
                    <Select label="Housing" value={Inputhousing} onChange={e => setInputhousing(e.target.value)} name="housing" required>
                      <MenuItem value="1">1-3 room apartment</MenuItem>
                      <MenuItem value="2">4-5 room apartment</MenuItem>
                      <MenuItem value="3"> greate than 5 room apartment</MenuItem>
                      <MenuItem value="4"> Terrace house</MenuItem>
                      <MenuItem value="5">Bungalow</MenuItem>
                    </Select>
                  </FormControl>





                </div>
                <div className="col-md-6">
                  <FormControl sx={{ m: 1, minWidth: 251 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                      <DatePicker className='form-control'
                        openTo="year"
                        views={['year', 'month', 'day']}
                        label="Work Start date"
                        value={startdatevalue}
                        onChange={(newValue) => {
                          setstartdateValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} helperText={null} />}
                      />
                    </LocalizationProvider></FormControl>

                  {/*}  <input id="fname" placeholder="Street Address Line 2" type="text" className="form-control form-control"/>*/}

                </div>

              </div>


              <div className="col-md-12 row" >  <br /><br />
                <label for="review" className="col-md-12"><h5>Preferred helper’s profile  </h5></label>



                <div className="col-md-3">

                  <FormControl sx={{ m: 1 }}>

                    <TextField label="Age" size='small' value={Inputage} onChange={e => setInputage(e.target.value)} name="age" variant="outlined" />



                  </FormControl>
                </div>
                <div className="col-md-4">

                  <FormControl sx={{ m: 1 }}>

                    <TextField label="Experience" name="experience" value={InputExper} onChange={e => setInputExper(e.target.value)} variant="outlined" />



                  </FormControl>

                </div>
                <div className="col-md-5">
                  <FormControl sx={{ m: 1, minWidth: 151 }}>
                    <InputLabel >Dietry Preference</InputLabel>
                    <Select name="DietaryPreference" value={InputDietaryPreference} onChange={e => setInputDietaryPreference(e.target.value)} label="Dietry Preference" required>
                      <MenuItem value="Halal">Halal</MenuItem>
                      <MenuItem value="Vegetarian">Vegetarian</MenuItem>
                      <MenuItem value="NoPreference">No Preference</MenuItem>
                    </Select>
                  </FormControl>


                </div>

              </div>

              <div className="col-md-12" >
                <div className="col-md-12">
                  <label for="review" >Nationality</label> </div>
                <div className="col-md-12">
                  {country.map((code, i) => (
                    <div className="col-md-3 "><FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name={`Inputcountry${i}`} value={`Inputcountry${i}`} onChange={e => `setInputcountry${i}`(!`Inputcountry${i}`)} control={<Checkbox />} label={code.CountryName} /></div>
                  ))}


                </div>
              </div>
              <div className="col-md-12" >
                <div className="col-md-12">
                  <label for="review" >Religion</label> </div>
                <div className="col-md-12">
                  <div className="col-md-3 "><FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="religion1" value={religion1} control={<Checkbox />} label="Christian" checked={religion1} onChange={() => setreligion1(!religion1)} /></div>
                  <div className="col-md-3"><FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="religion2" value={religion2} control={<Checkbox />} label="Muslim" checked={religion2} onChange={() => setreligion2(!religion2)} /></div>
                  <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="religion3" value={religion3} control={<Checkbox />} label="Buddhist" checked={religion3} onChange={() => setreligion3(!religion3)} /></div>
                  <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="religion4" value={religion4} control={<Checkbox />} label="No preference" checked={religion4} onChange={() => setreligion4(!religion4)} /></div>



                </div>
              </div>

              <div className="col-md-12" >  <br /><br />
                <label for="review" className="col-md-12"><h5>Helper’s benefits   </h5></label>



                <div className="col-md-5">
                  <FormControl sx={{ m: 1 }}>

                    <TextField label="Salary" value={InputSalary} onChange={e => setInputSalary(e.target.value)}

                      name="Salary" variant="outlined" />



                  </FormControl>


                </div>
                <div className="col-md-5">

                  <FormControl sx={{ m: 1, minWidth: 251 }}>
                    <InputLabel >Off day</InputLabel>
                    <Select name="OffDay" value={InputOffDay} onChange={e => setInputOffDay(e.target.value)} label="OffDay" required>
                      <MenuItem value="Weekly">Weekly</MenuItem>
                      <MenuItem value="Monthly">Monthly</MenuItem>
                      <MenuItem value="Quarterly">Quarterly</MenuItem>
                      <MenuItem value="Others">Others (pls specify)</MenuItem>
                    </Select>

                  </FormControl>
                </div>

              </div>

              <div className="col-md-12" >



                <div className="col-md-12">


                  <label for="review" >Accommodation</label>


                </div>
                <div className="col-md-12">

                  <div className="col-md-4">  <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="Accommodation1" value={InputAccommodation1} checked={InputAccommodation1} onChange={() => setInputAccommodation1(!InputAccommodation1)} control={<Checkbox />} label="In separate room" /></div>
                  <div className="col-md-4">  <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="Accommodation2" value={InputAccommodation2} checked={InputAccommodation2} onChange={() => setInputAccommodation2(!InputAccommodation2)} control={<Checkbox />} label="Share" /></div>
                  <div className="col-md-4"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="Accommodation3" value={InputAccommodation3} checked={InputAccommodation3} onChange={() => setInputAccommodation3(!InputAccommodation3)} control={<Checkbox />} label="Flexible" /></div>
                  <div className="col-md-4"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="Accommodation4" value={InputAccommodation4} checked={InputAccommodation4} onChange={() => setInputAccommodation4(!InputAccommodation4)} control={<Checkbox />} label="To Be Discussed" /></div>







                </div>

              </div>

              <div className="col-md-12" >
                <div className="col-md-12">
                  <label for="review" >Spoken Language</label> </div>
                <div className="col-md-12">
                  <div className="col-md-3 "><FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="InputLanguage1" value={InputLanguage1} checked={InputLanguage1} control={<Checkbox />} label="English" onChange={() => setInputLanguage1(!InputLanguage1)} /></div>
                  <div className="col-md-3"><FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="InputLanguage2" value={InputLanguage2} checked={InputLanguage2} control={<Checkbox />} label="Mandarin" onChange={() => setInputLanguage2(!InputLanguage2)} /></div>
                  <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="InputLanguage3" value={InputLanguage3} checked={InputLanguage3} control={<Checkbox />} label="Bahasa" onChange={() => setInputLanguage3(!InputLanguage3)} /></div>
                  <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="InputLanguage4" value={InputLanguage4} checked={InputLanguage4} control={<Checkbox />} label="Tamil" onChange={() => setInputLanguage4(!InputLanguage4)} /></div>
                  <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="InputLanguage5" value={InputLanguage5} checked={InputLanguage5} control={<Checkbox />} label="Hokkien" onChange={() => setInputLanguage5(!InputLanguage5)} /></div>
                  <div className="col-md-3"> <FormControlLabel sx={{ m: 1, minWidth: 400, '& .MuiSvgIcon-root': { fontSize: 25 } }} name="InputLanguage6" value={InputLanguage6} checked={InputLanguage6} control={<Checkbox />} label="Cantonese care" onChange={() => setInputLanguage6(!InputLanguage6)} /></div>



                </div>
              </div>

              <div className="col-md-12">
                <div className="col-md-12">
                  <FormControl sx={{ m: 1, minWidth: 415 }}>

                    <TextField label="Additional Benefit" required value={AdditionalRequirements} onChange={(e) => changeAdditionalRequirements(e.target.value)} name="Additionalrequirement" variant="outlined" />



                  </FormControl>

                </div></div>





            </div>

            <div className="col-md-8 row">
              <div className="col-md-3">
                {((gifbutto != '') && (gifbutto != null)) ?
                  <><img src={gifbutto} style={{ width: '100px;', height: '46px', border: '2.5px solid #557191', borderRadius: '30px' }}></img></>
                  :
                  <><Button className="btn1 btn-outline btn-white" type="submit" >Publish</Button></>
                }

              </div>
              <div className="col-md-5">
                <a href="#" ><Button className="btn1 btn-outline btn-white">Preview post</Button></a>


              </div>
              {/*} <div className="col-md-3">
																			  <a href="#" ><Button className="btn1 btn-outline btn-white">Publish</Button></a>
																							  
																			   </div>*/}
              <div className="col-md-4">
                <a href="#" ><Button className="btn1 btn-outline btn-white">Reset</Button></a>


              </div>
            </div>

          </div></form>


      </Row>



    </Fragment>
  );

};

export default TabsetUser;

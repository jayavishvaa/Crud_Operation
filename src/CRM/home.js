import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Button } from "@mui/material";
import axios from "axios";
import Dropdown from "./Components/dropdown";

const countriesData = [
  { id: 1, countryName: "United States" },
  { id: 2, countryName: "Canada" },
  { id: 3, countryName: "United Kingdom" },
  // Add more countries as needed
];

function Home() {
  const [callCount, setCallCount] = useState(0);
  const [grade, setGrade] = useState("");
  const [Gender, setGender] = useState("");
  const [branch, setBranch] = useState("");
  const [walkInDone, setWalkInDone] = useState("");
  const [source, setSource] = useState("");
  const [preSchool, setPreSchool] = useState("");
  const [counselling, setCounselling] = useState("");
  const [VirtualCounsellingDone, setVirtualCounsellingDone] = useState("");
  const [HomeCounselingDone, setHomeCounsellingDone] = useState("");
  const [ParentDemoDone, setParentDemoDone] = useState("");
  const [StudentOnlineDemoDone, setStudentOnlineDemoDone] = useState("");
  const [PrincipalnteractionDone, setPrincipalnteractionDone] = useState("");
  const [AdmissionBlocked, setAdmissionBlocked] = useState("");

  const [gradeData, setGradeData] = useState({});
  const [sourceData, setSourceData] = useState({});
  const [branchData, setBranchData] = useState({});

  useEffect(() => {
    fetchData("grade");
    fetchData("branch");
    fetchData("source");
  }, []);

  const fetchData = (data) => {
    axios
      .get(` ?data=${data}`)
      .then((response) => {
        const dataItems = response.data.Data;
        switch (data) {
          case "grade":
            setGradeData(dataItems);
            break;
          case "branch":
            setBranchData(dataItems);
            break;
          case "source":
            setSourceData(dataItems);
            break;
          default:
            break;
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  if (
    grade === "" ||
    branch === "" ||
    walkInDone === "" ||
    preSchool === "" ||
    source === "" ||
    counselling === "" ||
    VirtualCounsellingDone === "" ||
    HomeCounselingDone === "" ||
    ParentDemoDone === "" ||
    StudentOnlineDemoDone === "" ||
    PrincipalnteractionDone === "" ||
    AdmissionBlocked === ""
  ) {
    setGrade("nodata");
    setGender("nodata");
    setBranch("nodata");
    setWalkInDone("nodata");
    setSource("nodata");
    setPreSchool("nodata");
    setCounselling("nodata");
    setAdmissionBlocked("nodata");
    setVirtualCounsellingDone("nodata");
    setHomeCounsellingDone("nodata");
    setParentDemoDone("nodata");
    setStudentOnlineDemoDone("nodata");
    setPrincipalnteractionDone("nodata");
  }
  const handleFilters = () => {
    // const callCount = callCount;
    // const HomeCounselingDone = HomeCounselingDone;
    // const ParentDemoDone = ParentDemoDone;
    // const StudentOnlineDemoDone = StudentOnlineDemoDone;
    // const PrincipalnteractionDone = PrincipalnteractionDone;
    // const AdmissionBlocked = AdmissionBlocked;

    const Grade = grade;
    const ChildGender = Gender;
    const Branch = branch;
    const WalkinDone = walkInDone;
    const Source = source;
    const PreSchoolTieup = preSchool;
    const CounsellingDone = counselling;
    const VirtualCounselingDone = VirtualCounsellingDone;

    console.log("callCount: " + callCount);
    console.log("grade: " + Grade);
    console.log("Gender: " + ChildGender);
    console.log("branch: " + Branch);
    console.log("walkInDone: " + WalkinDone);
    console.log("source: " + Source);
    console.log("preSchool: " + PreSchoolTieup);
    console.log("counselling: " + CounsellingDone);
    console.log("VirtualCounselingDone: " + VirtualCounselingDone);
    console.log("HomeCounselingDone: " + HomeCounselingDone);
    console.log("ParentDemoDone: " + ParentDemoDone);
    console.log("StudentOnlineDemoDone: " + StudentOnlineDemoDone);
    console.log("PrincipalnteractionDone: " + PrincipalnteractionDone);
    console.log("AdmissionBlocked: " + AdmissionBlocked);

    // axios
    //   .post(``, {
    //     callCount,axios
    //   .post(``, {
    //     callCount,
    //     Grade,
    //     ChildGender,
    //     Branch,
    //     WalkinDone,
    //     Source,
    //     PreSchoolTieup,
    //     CounsellingDone,
    //     VirtualCounselingDone,
    //     HomeCounselingDone,
    //     ParentDemoDone,
    //     StudentOnlineDemoDone,
    //     PrincipalnteractionDone,
    //     AdmissionBlocked,
    //   })
    //   .then((response) => {
    //     let resp = response.data;
    //     if (resp.status_code === 200) {
    //       //   fetchData();
    //     } else {
    //       console.log("Error: " + resp.status_code);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //     Grade,
    //     ChildGender,
    //     Branch,
    //     WalkinDone,
    //     Source,
    //     PreSchoolTieup,
    //     CounsellingDone,
    //     VirtualCounselingDone,
    //     HomeCounselingDone,
    //     ParentDemoDone,
    //     StudentOnlineDemoDone,
    //     PrincipalnteractionDone,
    //     AdmissionBlocked,
    //   })
    //   .then((response) => {
    //     let resp = response.data;
    //     if (resp.status_code === 200) {
    //       //   fetchData();
    //     } else {
    //       console.log("Error: " + resp.status_code);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const onChangeCallCount = (e) => {
    setCallCount(e.target.value);
  };
  const onChangeGrade = (e) => {
    setGrade(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeBranch = (e) => {
    setBranch(e.target.value);
  };
  const onChangeWalkInDone = (e) => {
    setWalkInDone(e.target.value);
  };
  const onChangeSource = (e) => {
    setSource(e.target.value);
  };
  const onChangePreSchool = (e) => {
    setPreSchool(e.target.value);
  };
  const onChangeCounselling = (e) => {
    setCounselling(e.target.value);
  };
  const onChangeVirtualCounsellingDone = (e) => {
    setVirtualCounsellingDone(e.target.value);
  };
  const onChangeHomeCounsellingDone = (e) => {
    setHomeCounsellingDone(e.target.value);
  };
  const onChangeParentDemoDone = (e) => {
    setParentDemoDone(e.target.value);
  };
  const onChangeStudentOnlineDemoDone = (e) => {
    setStudentOnlineDemoDone(e.target.value);
  };
  const onChangePrincipalnteractionDone = (e) => {
    setPrincipalnteractionDone(e.target.value);
  };
  const onChangeAdmissionBlocked = (e) => {
    setAdmissionBlocked(e.target.value);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div style={{ width: "20%" }}>
          <TextField
            label="Call Count"
            margin="dense"
            size="small"
            onChange={onChangeCallCount}
            required
            fullWidth
            value={callCount}
            variant="outlined"
          />
        </div>

        <div style={{ width: "20%" }}>
          <Dropdown
            label="Grade"
            value={grade}
            onChange={onChangeGrade}
            data={countriesData}
          />
        </div>

        <div style={{ width: "20%" }}>
          <TextField
            label="Gender"
            margin="dense"
            size="small"
            onChange={onChangeGender}
            required
            select
            fullWidth
            value={Gender}
            variant="outlined"
          >
            <MenuItem value="Male" name="Male">
              Male
            </MenuItem>
            <MenuItem value="Female" name="Female">
              Female
            </MenuItem>
            <MenuItem value="NoData" name="NoData">
              No data
            </MenuItem>
          </TextField>
        </div>

        <div style={{ width: "20%" }}>
          <TextField
            label="branch"
            margin="dense"
            size="small"
            onChange={onChangeBranch}
            required
            select
            fullWidth
            value={branch}
            variant="outlined"
          >
            <MenuItem value="branch" name="branch">
              All
            </MenuItem>
          </TextField>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div style={{ width: "20%" }}>
          <TextField
            label="walkInDone"
            margin="dense"
            size="small"
            onChange={onChangeWalkInDone}
            required
            select
            defaultValue={"Nodata"}
            value={walkInDone}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="Yes" name="Yes">
              Yes
            </MenuItem>
            <MenuItem value="No" name="No">
              No
            </MenuItem>
            <MenuItem value="No data" name="No data">
              No data
            </MenuItem>
          </TextField>
        </div>

        <div style={{ width: "20%" }}>
          <TextField
            label="source"
            margin="dense"
            size="small"
            onChange={onChangeSource}
            required
            select
            fullWidth
            value={source}
            variant="outlined"
          >
            <MenuItem value="source" name="source">
              All
            </MenuItem>
          </TextField>
        </div>

        <div style={{ width: "20%" }}>
          <TextField
            label="preSchool"
            margin="dense"
            size="small"
            onChange={onChangePreSchool}
            required
            select
            fullWidth
            value={preSchool}
            variant="outlined"
          >
            <MenuItem value="Yes" name="Yes">
              Yes
            </MenuItem>
            <MenuItem value="No" name="No">
              No
            </MenuItem>
            <MenuItem value="Nodata" name="Nodata">
              nodata
            </MenuItem>
          </TextField>
        </div>

        <div style={{ width: "20%" }}>
          <TextField
            label="counselling"
            margin="dense"
            size="small"
            onChange={onChangeCounselling}
            required
            select
            fullWidth
            value={counselling}
            variant="outlined"
          >
            <MenuItem value="Yes" name="Yes">
              Yes
            </MenuItem>
            <MenuItem value="No" name="No">
              No
            </MenuItem>
            <MenuItem value="No data" name="No data">
              No data
            </MenuItem>
          </TextField>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div style={{ width: "20%" }}>
          <TextField
            label="VirtualCounselingDone"
            margin="dense"
            size="small"
            onChange={onChangeVirtualCounsellingDone}
            required
            select
            fullWidth
            value={VirtualCounsellingDone}
            variant="outlined"
          >
            <MenuItem value="Yes" name="Yes">
              Yes
            </MenuItem>
            <MenuItem value="No" name="No">
              No
            </MenuItem>
            <MenuItem value="Nodata" name="Nodata">
              nodata
            </MenuItem>
          </TextField>
        </div>

        <div style={{ width: "20%" }}>
          <TextField
            label="HomeCounselingDone"
            margin="dense"
            size="small"
            onChange={onChangeHomeCounsellingDone}
            required
            select
            fullWidth
            value={HomeCounselingDone}
            variant="outlined"
          >
            <MenuItem value="Yes" name="Yes">
              Yes
            </MenuItem>
            <MenuItem value="No" name="No">
              No
            </MenuItem>
            <MenuItem value="Nodata" name="Nodata">
              nodata
            </MenuItem>
          </TextField>
        </div>

        <div style={{ width: "20%" }}>
          <TextField
            label="ParentDemoDone"
            margin="dense"
            size="small"
            onChange={onChangeParentDemoDone}
            required
            select
            fullWidth
            value={ParentDemoDone}
            variant="outlined"
          >
            <MenuItem value="Yes" name="Yes">
              Yes
            </MenuItem>
            <MenuItem value="No" name="No">
              No
            </MenuItem>
            <MenuItem value="Nodata" name="Nodata">
              nodata
            </MenuItem>
          </TextField>
        </div>

        <div style={{ width: "20%" }}>
          <TextField
            label="StudentOnlineDemoDone"
            margin="dense"
            size="small"
            onChange={onChangeStudentOnlineDemoDone}
            required
            select
            fullWidth
            value={StudentOnlineDemoDone}
            variant="outlined"
          >
            <MenuItem value="Yes" name="Yes">
              Yes
            </MenuItem>
            <MenuItem value="No" name="No">
              No
            </MenuItem>
            <MenuItem value="Nodata" name="Nodata">
              nodata
            </MenuItem>
          </TextField>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div style={{ width: "20%" }}>
          <TextField
            label="PrincipalnteractionDone"
            margin="dense"
            size="small"
            onChange={onChangePrincipalnteractionDone}
            required
            select
            fullWidth
            value={PrincipalnteractionDone}
            variant="outlined"
          >
            <MenuItem value="Yes" name="Yes">
              Yes
            </MenuItem>
            <MenuItem value="No" name="No">
              No
            </MenuItem>
            <MenuItem value="Nodata" name="Nodata">
              nodata
            </MenuItem>
          </TextField>
        </div>

        <div style={{ width: "20%" }}>
          <TextField
            label="AdmissionBlocked"
            margin="dense"
            size="small"
            onChange={onChangeAdmissionBlocked}
            required
            select
            fullWidth
            value={AdmissionBlocked}
            variant="outlined"
          >
            <MenuItem value="Yes" name="Yes">
              Yes
            </MenuItem>
            <MenuItem value="No" name="No">
              No
            </MenuItem>
            <MenuItem value="Nodata" name="Nodata">
              nodata
            </MenuItem>
          </TextField>
        </div>

        <div>
          <Button variant="contained" size="medium" onClick={handleFilters}>
            Get Lead Score
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;

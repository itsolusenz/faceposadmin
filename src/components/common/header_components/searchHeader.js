import React, { Fragment, useState } from "react";
import { Search } from "react-feather";
import { Form, FormGroup, Input } from "reactstrap";

const SearchHeader = () => {
	const [searchbar, setSearchbar] = useState(false);

	const handleSearchClick = () => {
		setSearchbar(!searchbar);
	};

	return (
		<Fragment>
			<Form className="form-inline search-form">
				<FormGroup>
					<Input style={{border :'1px solid #85bc57',width:'400px'}}
						className={"form-control-plaintext " + (searchbar ? "open" : "")}
						type="search"
						placeholder="Search.."
					/>
					<span style={{color:'#85bc57',border :'1px solid #85bc57',padding:'6px 4px 1px 3px',borderRadius:'4px',cursor:'pointer'}}
						className="d-sm mobile-search"
						onClick={() => handleSearchClick()}
					>
						<Search />
					</span>
				</FormGroup>
			</Form>
		</Fragment>
	);
};

export default SearchHeader;

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}> 
					<span className='label-text'>Male</span>
					<input type="checkbox"  className="checkbox checkbox-accent" />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>  
					<span className='label-text'>Female</span>
                    <input type="checkbox" className="checkbox checkbox-secondary" />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
import PhoneInput from "react-phone-number-input/input";

const FormPhone = ({ name, label, size }) => {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <PhoneInput
        country="US"
        name={name}
        // className="form-input form-row"
        onChange={() => null}
        className={`input input-bordered ${size} `}
        required
      />
    </div>
  );
};
export default FormPhone;

const ButtonMachine = (updateFunc) => (
    (Date.now() > Date.parse(machines["washer1"].endTime) ? 
                    <Button variant="success" onClick={() => {updateMachineTime(60, updatewasher1)}}>Start</Button>
                    : <Button variant="danger" onClick={() => updateMachineTime(0, updatewasher1)}>Stop</Button>)
)

export default ButtonMachine;


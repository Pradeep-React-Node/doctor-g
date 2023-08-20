import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { Form, StyledTextField } from './FormStyle';
import { updateOrder } from "../../redux/actions/OrderAction";
import { Formik } from "formik";


export const DeadlineUpdatePop = (props) => {
    const id = props?.orderData?._id;
    const dispatch = useDispatch()

    const [state, setState] = useState({
        deadline: props.orderData.deadline,
        deadline_resone: props.orderData.deadline_resone,
    });

    const handleSubmit = () => {
        dispatch(updateOrder(id, state))
        window.location.reload(false);
    };

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (
        <Formik
            onSubmit={handleSubmit}
            enableReinitialize={true}
        // initialValues={initialValues}
        //   validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
            }) => (
                <Form onSubmit={handleSubmit} onError={() => null}>
                    <StyledTextField
                        fullWidth
                        type="date"
                        size="small"
                        name="deadline"
                        onChange={handleChange}
                        value={state?.deadline}
                    />
                    <StyledTextField
                        fullWidth
                        type="text"
                        size="small"
                        label="Type Your Remark Here"
                        name="deadline_resone"
                        onChange={handleChange}
                        value={state.deadline_resone || ""}
                    />
                    <Button onClick={handleSubmit}>Update Now</Button>
                </Form>
            )}
        </Formik>

    )
}

export const SurveyUpdatePop = (props) => {
    const id = props?.orderData?._id;
    const dispatch = useDispatch()

    const [state, setState] = useState({
        site_survey_deadline: props.orderData.site_survey_deadline,
        deadline_resone: props.orderData.deadline_resone,
    });

    const handleSubmit = () => {
        dispatch(updateOrder(id, state))
        window.location.reload(false);
    };

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (
        <Formik
            onSubmit={handleSubmit}
            enableReinitialize={true}
        // initialValues={initialValues}
        //   validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
            }) => (
                <Form onSubmit={handleSubmit} onError={() => null}>
                    <StyledTextField
                        fullWidth
                        type="date"
                        size="small"
                        name="site_survey_deadline"
                        onChange={handleChange}
                        value={state?.site_survey_deadline}
                    />

                    <StyledTextField
                        fullWidth
                        type="text"
                        size="small"
                        label="Type Your Remark Here"
                        name="deadline_resone"
                        onChange={handleChange}
                        value={state.deadline_resone || ""}
                    />
                    <Button onClick={handleSubmit}>Update Now</Button>
                </Form>
            )}
        </Formik>

    )
}


export const DrawingUpdatePop = (props) => {
    const id = props?.orderData?._id;
    const dispatch = useDispatch()

    const [state, setState] = useState({
        drawing_deadline: props.orderData.drawing_deadline,
        deadline_resone: props.orderData.deadline_resone,
    });

    const handleSubmit = (event) => {
        dispatch(updateOrder(id, state))
        window.location.reload(false);
    };

    const handleChange = (event) => {
        // event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (

        <Formik
            onSubmit={handleSubmit}
            enableReinitialize={true}
        // initialValues={initialValues}
        //   validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
            }) => (
                <Form onSubmit={handleSubmit} onError={() => null}>
                    <StyledTextField
                        fullWidth
                        type="date"
                        size="small"
                        name="drawing_deadline"
                        onChange={handleChange}
                        value={state?.drawing_deadline}
                    />

                    <StyledTextField
                        fullWidth
                        type="text"
                        size="small"
                        label="Type Your Remark Here"
                        name="deadline_resone"
                        onChange={handleChange}
                        value={state.deadline_resone || ""}
                    />

                    <Button onClick={handleSubmit}>Update Now</Button>
                </Form>
            )}
        </Formik>
    )
}

export const AluiminiumUpdatePop = (props) => {
    const id = props?.orderData?._id;
    const dispatch = useDispatch()

    const [state, setState] = useState({
        aluminium_deadline: props.orderData.aluminium_deadline,
        deadline_resone: props.orderData.deadline_resone,
    });

    const handleSubmit = (event) => {
        dispatch(updateOrder(id, state))
        window.location.reload(false);
    };

    const handleChange = (event) => {
        // event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (

        <Formik
            onSubmit={handleSubmit}
            enableReinitialize={true}
        // initialValues={initialValues}
        //   validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
            }) => (
                <Form onSubmit={handleSubmit} onError={() => null}>
                    <StyledTextField
                        fullWidth
                        type="date"
                        size="small"
                        name="aluminium_deadline"
                        onChange={handleChange}
                        value={state?.aluminium_deadline}
                    />

                    <StyledTextField
                        fullWidth
                        type="text"
                        size="small"
                        label="Type Your Remark Here"
                        name="deadline_resone"
                        onChange={handleChange}
                        value={state.deadline_resone || ""}
                    />

                    <Button onClick={handleSubmit}>Update Now</Button>
                </Form>
            )}
        </Formik>
    )
}

export const GlassUpdatePop = (props) => {
    const id = props?.orderData?._id;
    const dispatch = useDispatch()

    const [state, setState] = useState({
        glassAcphplfixing_deadline: props.orderData.glassAcphplfixing_deadline,
        deadline_resone: props.orderData.deadline_resone,
    });

    const handleSubmit = (event) => {
        dispatch(updateOrder(id, state))
        window.location.reload(false);
    };

    const handleChange = (event) => {
        // event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (

        <Formik
            onSubmit={handleSubmit}
            enableReinitialize={true}
        // initialValues={initialValues}
        //   validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
            }) => (
                <Form onSubmit={handleSubmit} onError={() => null}>
                    <StyledTextField
                        fullWidth
                        type="date"
                        size="small"
                        name="glassAcphplfixing_deadline"
                        onChange={handleChange}
                        value={state?.glassAcphplfixing_deadline}
                    />

                    <StyledTextField
                        fullWidth
                        type="text"
                        size="small"
                        label="Type Your Remark Here"
                        name="deadline_resone"
                        onChange={handleChange}
                        value={state.deadline_resone || ""}
                    />

                    <Button onClick={handleSubmit}>Update Now</Button>
                </Form>
            )}
        </Formik>
    )
}

export const HandoverUpdatePop = (props) => {
    const id = props?.orderData?._id;
    const dispatch = useDispatch()

    const [state, setState] = useState({
        handover_deadline: props.orderData.handover_deadline,
        deadline_resone: props.orderData.deadline_resone,
    });

    const handleSubmit = (event) => {
        dispatch(updateOrder(id, state))
        window.location.reload(false);
    };

    const handleChange = (event) => {
        // event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (

        <Formik
            onSubmit={handleSubmit}
            enableReinitialize={true}
        // initialValues={initialValues}
        //   validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setSubmitting,
                setFieldValue,
            }) => (
                <Form onSubmit={handleSubmit} onError={() => null}>
                    <StyledTextField
                        fullWidth
                        type="date"
                        size="small"
                        name="handover_deadline"
                        onChange={handleChange}
                        value={state?.handover_deadline}
                    />

                    <StyledTextField
                        fullWidth
                        type="text"
                        size="small"
                        label="Type Your Remark Here"
                        name="deadline_resone"
                        onChange={handleChange}
                        value={state.deadline_resone || ""}
                    />

                    <Button onClick={handleSubmit}>Update Now</Button>
                </Form>
            )}
        </Formik>
    )
}

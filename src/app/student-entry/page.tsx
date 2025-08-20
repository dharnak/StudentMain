'use client'

import { useState } from 'react'
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Box,
  Typography,
  Paper,
  SelectChangeEvent,
  Snackbar,
  Alert,
} from '@mui/material'
import { usePostStudentMutation } from '../api/studentApi'

const StudentEntry = () => {
  const [postStudent, { isLoading: loading, isError, error }] = usePostStudentMutation()

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    id: '',
    class: '',
    busnumber: '',
    fees: '',
    address: '',
    gender: '',
    departmentId: '',
  })

  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<'success' | 'error'>('success')
  const [message, setMessage] = useState('')

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    postStudent(formData)
      .unwrap()
      .then(() => {
        setSeverity('success')
        setMessage('Student data submitted successfully')
        setOpen(true)

        setFormData({
          firstname: '',
          lastname: '',
          id: '',
          class: '',
          busnumber: '',
          fees: '',
          address: '',
          gender: '',
          departmentId: '',
        })
      })
      .catch((err) => {
        console.error('Submission failed:', err?.data || err?.error || err)
        setSeverity('error')
        setMessage('Error saving data.')
        setOpen(true)
      })
  }



  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 25 }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 700 }}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{ fontWeight: 'bold' }}
        >
          Student Entry
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="First Name"
              name="firstname"
              variant="filled"
              fullWidth
              value={formData.firstname}
              onChange={handleInputChange}
            />
            <TextField
              label="Last Name"
              name="lastname"
              variant="filled"
              fullWidth
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="Class"
              name="class"
              variant="filled"
              fullWidth
              value={formData.class}
              onChange={handleInputChange}
            />
            <TextField
              label="Bus Number"
              name="busnumber"
              type="number"
              variant="filled"
              fullWidth
              value={formData.busnumber}
              onChange={handleInputChange}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              label="Fees"
              name="fees"
              type="number"
              variant="filled"
              fullWidth
              value={formData.fees}
              onChange={handleInputChange}
            />
            <TextField
              label="ID"
              name="id"
              type="number"
              variant="filled"
              fullWidth
              value={formData.id}
              onChange={handleInputChange}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Address"
              name="address"
              variant="filled"
              fullWidth
              multiline
              rows={2}
              value={formData.address}
              onChange={handleInputChange}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControl component="fieldset">
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                labelId="department-label"
                id="departmentId"
                name="departmentId"
                value={formData.departmentId}
                onChange={handleSelectChange}
              >
                <MenuItem value={1}>Computer Science</MenuItem>
                <MenuItem value={2}>Mechanical</MenuItem>
                <MenuItem value={3}>Electronics</MenuItem>
                <MenuItem value={4}>Civil</MenuItem>
                <MenuItem value={5}>IT</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#022e1f' }}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'SUBMIT'}
          </Button>

          {isError && (
            <Typography color="error" mt={2}>
              Error: {(error as any)?.data?.message || 'Submission failed'}
            </Typography>
          )}
        </form>
      </Paper>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{
            width: '100%',
            marginLeft: '1150px',
            marginBottom: '110px',
            backgroundColor: '#022e1f',
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default StudentEntry

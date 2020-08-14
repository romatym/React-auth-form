import React from 'react'
import Header from './Header'
import BasicsStep from './BasicsStep'
import ContactsStep from './ContactsStep'
import AvatarStep from './AvatarStep'
import FinishStep from './FinishStep'
import Navigation from './Navigation'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      page: 1,
      values: {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        gender: 'male',
        email: '',
        mobile: '',
        country: '',
        city: '',
        avatar: '',
      },
      errors: {
        firstName: false,
        lastName: false,
        password: false,
        repeatPassword: false,
        gender: false,
        email: false,
        mobile: false,
        country: false,
        city: false,
        avatar: false,
      },
    }
  }

  nextPage = () => {
    const errors = this.CheckErrors(this.state)
    //const errors = {};

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors,
      })
    } else {
      this.setState(state => ({
        page: state.page + 1,
        errors: {},
      }))
    }
  }

  prevPage = () => {
    this.setState(state => ({
      page: state.page - 1,
      //errors: {},
    }))
  }

  CheckErrors = state => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regMobile = /^\d{10}$/
    const errors = {}

    switch (state.page) {
      case 1:
        if (state.values.firstName.length < 5) {
          errors.firstName = 'Must be at least 5 characters long'
        }
        if (state.values.lastName.length < 5) {
          errors.lastName = 'Must be at least 5 characters long'
        }
        if (state.values.password.length < 6) {
          errors.password = 'Must be 6 characters or more'
        }
        if (state.values.repeatPassword !== state.values.password) {
          errors.repeatPassword = 'Must be equal password'
        }
        if (!state.values.gender) {
          errors.gender = 'Required'
        }
        break

      case 2:
        if (!regEmail.test(state.values.email)) {
          errors.email = 'Invalid email address'
        }
        if (!state.values.mobile.match(regMobile)) {
          errors.mobile = '	Invalid mobile'
        }

        if (!state.values.country) {
          errors.country = 'Required'
        }

        if (!state.values.city) {
          errors.city = 'Required'
        }
        break

      case 3:
        if (!state.values.avatar) {
          errors.avatar = 'Required'
        }
        break

      default:
    }

    return errors
  }

  onChange = event => {
    const { name, value } = event.target
    //event.persist();
    const values = { ...this.state.values }
    values[name] = value
    this.setState({
      values: values,
    })
  }

  onChangeAvatar = event => {
    console.log('event.target', event.target)

    event.persist()
    const values = { ...this.state.values }

    const reader = new FileReader()
    reader.onload = event => {
      values.avatar = event.target.result
      this.setState({
        values: values,
      })
    }
    reader.readAsDataURL(event.target.files[0])
  }

  render() {
    let pageMarkup = ''

    switch (this.state.page) {
      case 1:
        pageMarkup = (
          <BasicsStep
            values={this.state.values}
            errors={this.state.errors}
            onChange={this.onChange}
          />
        )
        break
      case 2:
        pageMarkup = (
          <ContactsStep
            values={this.state.values}
            errors={this.state.errors}
            onChange={this.onChange}
            onChangeCountry={this.onChange}
          />
        )
        break
      case 3:
        console.log('this.onChangeAvatar', this.onChangeAvatar)
        pageMarkup = (
          <fieldset className="form-group">
            <AvatarStep
              values={this.state.values}
              errors={this.state.errors}
              onChangeAvatar={this.onChangeAvatar}
            />
          </fieldset>
        )
        break
      case 4:
        pageMarkup = (
          <fieldset className="form-group">
            <FinishStep values={this.state.values} />
          </fieldset>
        )
        break
      default:
    }

    return (
      <div className="form-container card">
        <form className="form card-body">
          <Header page={this.state.page} />

          {pageMarkup}

          <Navigation
            page={this.state.page}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        </form>
      </div>
    )
  }
}

type GeoType = {
  lat: string
  lng: string
}

type AddressType = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: GeoType
}

type Company={
  name: string,
  catchPhrase: string,
  bs: string,
}

interface Items {
  address: AddressType
  company: Company
  email: string,
  id: 1
  name: string,
  phone: string,
  username: string,
  website: string,

}

export  type ItemsList = Items[]
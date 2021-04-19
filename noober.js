// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  
  // Retrieve and store customer information
  let customerFirstName = ride.passengerDetails.first
  let customerLastName = ride.passengerDetails.last
  let customerPhoneNumber = ride.passengerDetails.phoneNumber

  // Retrieve and store customer pickup information
  let customerPickupAddress = ride.pickupLocation.address
  let customerPickupCity = ride.pickupLocation.city
  let customerPickupState = ride.pickupLocation.state
  let customerPickupZip = ride.pickupLocation.zip

  // Retrieve and store customer dropoff information
  let customerDropoffAddress = ride.dropoffLocation.address
  let customerDropoffCity = ride.dropoffLocation.city
  let customerDropoffState = ride.dropoffLocation.state
  let customerDropoffZip = ride.dropoffLocation.zip

  // Retrieve and store service type
  let serviceType = ride.purpleRequested

  // Write condiditional statement to display name, changing based on the level of service requested
  if(serviceType == true){
    console.log(`Noober Purple Passenger: ${customerFirstName} ${customerLastName} - ${customerPhoneNumber}`)
  } else {
      console.log(`Noober Passenger: ${customerFirstName} ${customerLastName} - ${customerPhoneNumber}`)
    }
 
  // Write statement to displaye pickup and dropoff location
  console.log(`Pickup location: ${customerPickupAddress}, ${customerPickupCity}, ${customerPickupState}, ${customerPickupZip}`)
  console.log(`Dropoff location: ${customerDropoffAddress}, ${customerDropoffCity}, ${customerDropoffState}, ${customerDropoffZip}`)

  // Retrieve the number of passengers
  let numberPassengers = ride.numberOfPassengers

  // Write conditional statement for number of passengers
  if (serviceType == true) {
    console.log(`Service Type: Noober Purple`)
  } else if (numberPassengers > 3) {
    console.log(`Service Type: Noober XL`)
  } else {
      console.log(`Service Type: Noober X`)
    }

  // 🔥 YOUR CODE ENDS HERE 🔥
})

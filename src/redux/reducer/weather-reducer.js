export const reducer = (state = '', action) => {
    switch (action.type) {
        case 'WEATHER_CHANGE':
            return {
                "Location": action.payload.name,
                "Temperature": action.payload.main.temp + " ℃",
                "Minimum temperature": action.payload.main.temp_min + " ℃",
                "Maximum temperature": action.payload.main.temp_max + " ℃",
                "Pressure": action.payload.main.pressure,
                "Humidity": action.payload.main.humidity,
                "Visibility": action.payload.visibility,
            }
        case 'WEATHER_ERROR':
            return {"We can't give you the weather": action.payload.message}
        default:
            return state;
    }
}
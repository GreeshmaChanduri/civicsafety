
const crimeData = [
    { country: "Afghanistan", crimeRate: 75, latitude: 33.93911, longitude: 67.709953 },
    { country: "Albania", crimeRate: 28, latitude: 41.153332, longitude: 20.168331 },
    { country: "Algeria", crimeRate: 33, latitude: 28.033886, longitude: 1.659626 },
    { country: "Andorra", crimeRate: 12, latitude: 42.546245, longitude: 1.601554 },
    { country: "Angola", crimeRate: 45, latitude: -11.202692, longitude: 17.873887 },
    { country: "Igarka", crimeRate: 18, latitude: 67.4667, longitude: 86.5833 },
    { country: "Antigua and Barbuda", crimeRate: 19, latitude: 17.060816, longitude: -61.796428 },
    { country: "Argentina", crimeRate: 36, latitude: -38.416097, longitude: -63.616672 },
    { country: "Armenia", crimeRate: 20, latitude: 40.069099, longitude: 45.038189 },
    { country: "Australia", crimeRate: 23, latitude: -25.274398, longitude: 133.775136 },
    { country: "Austria", crimeRate: 18, latitude: 47.516231, longitude: 14.550072 },
    { country: "Azerbaijan", crimeRate: 26, latitude: 40.143105, longitude: 47.576927 },
    { country: "Bahamas", crimeRate: 50, latitude: 25.03428, longitude: -77.39628 },
    { country: "Bahrain", crimeRate: 8, latitude: 25.930414, longitude: 50.637772 },
    { country: "Bangladesh", crimeRate: 37, latitude: 23.684994, longitude: 90.356331 },
    { country: "Barbados", crimeRate: 12, latitude: 13.193887, longitude: -59.543198 },
    { country: "Belarus", crimeRate: 11, latitude: 53.709807, longitude: 27.953389 },
    { country: "Belgium", crimeRate: 24, latitude: 50.503887, longitude: 4.469936 },
    { country: "Belize", crimeRate: 33, latitude: 17.189877, longitude: -88.49765 },
    { country: "Benin", crimeRate: 30, latitude: 9.30769, longitude: 2.315834 },
    { country: "Bhutan", crimeRate: 14, latitude: 27.514162, longitude: 90.433601 },
    { country: "Bolivia", crimeRate: 43, latitude: -16.290154, longitude: -63.588653 },
    { country: "Bosnia and Herzegovina", crimeRate: 35, latitude: 43.915886, longitude: 17.679076 },
    { country: "Botswana", crimeRate: 22, latitude: -22.328474, longitude: 24.684866 },
    { country: "Brazil", crimeRate: 68, latitude: -14.235004, longitude: -51.92528 },
    { country: "Brunei", crimeRate: 6, latitude: 4.535277, longitude: 114.727669 },
    { country: "Bulgaria", crimeRate: 30, latitude: 42.733883, longitude: 25.48583 },
    { country: "Burkina Faso", crimeRate: 40, latitude: 12.238333, longitude: -1.561593 },
    { country: "Burundi", crimeRate: 39, latitude: -3.373056, longitude: 29.918886 },
    { country: "Cambodia", crimeRate: 25, latitude: 12.565679, longitude: 104.990963 },
    { country: "Cameroon", crimeRate: 38, latitude: 7.369722, longitude: 12.354722 },
    { country: "Canada", crimeRate: 30, latitude: 56.130366, longitude: -106.346771 },
    { country: "Cape Verde", crimeRate: 18, latitude: 16.5388, longitude: -23.0418 },
    { country: "Central African Republic", crimeRate: 49, latitude: 6.611111, longitude: 20.939444 },
    { country: "Chad", crimeRate: 34, latitude: 15.454166, longitude: 18.732207 },
    { country: "Chile", crimeRate: 27, latitude: -35.675147, longitude: -71.542969 },
    { country: "China", crimeRate: 26, latitude: 35.86166, longitude: 104.195397 },
    { country: "Colombia", crimeRate: 52, latitude: 4.570868, longitude: -74.297333 },
    { country: "Comoros", crimeRate: 14, latitude: -11.875001, longitude: 43.872219 },
    { country: "Congo (Brazzaville)", crimeRate: 31, latitude: -0.228021, longitude: 15.827659 },
    { country: "Congo (Kinshasa)", crimeRate: 46, latitude: -4.038333, longitude: 21.758664 },
    { country: "Costa Rica", crimeRate: 12, latitude: 9.748917, longitude: -83.753428 },
    { country: "Croatia", crimeRate: 20, latitude: 45.1, longitude: 15.2 },
    { country: "Cuba", crimeRate: 17, latitude: 21.521757, longitude: -77.781167 },
    { country: "Cyprus", crimeRate: 16, latitude: 35.126413, longitude: 33.429859 },
    { country: "Czech Republic", crimeRate: 18, latitude: 49.817492, longitude: 15.472962 },
    { country: "Denmark", crimeRate: 13, latitude: 56.26392, longitude: 9.501785 },
    { country: "Djibouti", crimeRate: 30, latitude: 11.825138, longitude: 42.590275 },
    { country: "Dominica", crimeRate: 19, latitude: 15.414999, longitude: -61.370976 },
    { country: "Dominican Republic", crimeRate: 38, latitude: 18.735693, longitude: -70.162651 },
    { country: "Ecuador", crimeRate: 26, latitude: -1.831239, longitude: -78.183406 },
    { country: "Egypt", crimeRate: 24, latitude: 26.820553, longitude: 30.802498 },
    { country: "El Salvador", crimeRate: 69, latitude: 13.794185, longitude: -88.89653 },
    { country: "Equatorial Guinea", crimeRate: 47, latitude: 1.650801, longitude: 10.267895 },
    { country: "Eritrea", crimeRate: 38, latitude: 15.179384, longitude: 39.782334 },
    { country: "Estonia", crimeRate: 24, latitude: 58.595272, longitude: 25.013607 },
    { country: "Eswatini", crimeRate: 45, latitude: -26.522503, longitude: 31.465866 },
    { country: "Ethiopia", crimeRate: 28, latitude: 9.145, longitude: 40.489673 },
    { country: "India", crimeRate: 31, latitude: 20.593684, longitude: 78.96288 },
    { country: "United States", crimeRate: 45, latitude: 37.09024, longitude: -95.712891 },
    { country: "Greenland", crimeRate: 25, latitude: 71.706936, longitude: -42.604303 },

  // Poland
  { country: "Poland", crimeRate: 23, latitude: 51.9194, longitude: 19.1451 },

  // Lithuania (via Kaliningrad Oblast)
  { country: "Lithuania", crimeRate: 20, latitude: 55.1694, longitude: 23.8813 },

  // Norway
  { country: "Norway", crimeRate: 20, latitude: 60.4720, longitude: 8.4689 },

  // Finland
  { country: "Finland", crimeRate: 17, latitude: 61.9241, longitude: 25.7482 },

  // Estonia
  { country: "Estonia", crimeRate: 18, latitude: 58.5953, longitude: 25.0136 },

  // Latvia
  { country: "Latvia", crimeRate: 23, latitude: 56.8796, longitude: 24.6032 },

  // Belarus
  { country: "Belarus", crimeRate: 16, latitude: 53.7098, longitude: 27.9534 },

  // Ukraine
  { country: "Ukraine", crimeRate: 33, latitude: 48.3794, longitude: 31.1656 },

  // Georgia
  { country: "Georgia", crimeRate: 19, latitude: 42.3154, longitude: 43.3569 },
  
  // Moscow, Russia
  { country: "Moscow", crimeRate: 30, latitude: 55.7558, longitude: 37.6176 },

  // St. Petersburg, Russia
  { country: "St. Petersburg", crimeRate: 28, latitude: 59.9343, longitude: 30.3351 },

  // Novosibirsk, Russia
  { country: "Novosibirsk", crimeRate: 26, latitude: 55.0084, longitude: 82.9357 },

  // Yekaterinburg, Russia
  { country: "Yekaterinburg", crimeRate: 24, latitude: 56.8389, longitude: 60.6057 },

  // Nizhny Novgorod, Russia
  { country: "Nizhny Novgorod", crimeRate: 25, latitude: 56.2965, longitude: 43.9361 },

  // Kazan, Russia
  { country: "Kazan", crimeRate: 27, latitude: 55.8304, longitude: 49.0661 },

  // Chelyabinsk, Russia
  { country: "Chelyabinsk", crimeRate: 23, latitude: 55.1644, longitude: 61.4368 },

  // Omsk, Russia
  { country: "Omsk", crimeRate: 22, latitude: 54.9885, longitude: 73.3242 },

  // Samara, Russia
  { country: "Samara", crimeRate: 21, latitude: 53.1959, longitude: 50.1002 },

  // Rostov-on-Don, Russia
  { country: "Rostov-on-Don", crimeRate: 19, latitude: 47.2357, longitude: 39.7015 },

  // Add more countries and crime rates here...


  // Azerbaijan
  { country: "Azerbaijan", crimeRate: 28, latitude: 40.1431, longitude: 47.5769 },

  // Kazakhstan
  { country: "Kazakhstan", crimeRate: 29, latitude: 48.0196, longitude: 66.9237 },

  // China
  { country: "China", crimeRate: 24, latitude: 35.8617, longitude: 104.1954 },

  // Mongolia
  { country: "Mongolia", crimeRate: 33, latitude: 46.8625, longitude: 103.8467 },

  // North Korea
  { country: "North Korea", crimeRate: 34, latitude: 40.3399, longitude: 127.5101 },
    { country: "Iran", crimeRate: 35, latitude: 32.427908, longitude: 53.688046 },
    { country: "Iraq", crimeRate: 61, latitude: 33.223191, longitude: 43.679291 },
    { country: "Ireland", crimeRate: 15, latitude: 53.41291, longitude: -8.24389 },
    { country: "Israel", crimeRate: 25, latitude: 31.046051, longitude: 34.851612 },
    { country: "Italy", crimeRate: 30, latitude: 41.87194, longitude: 12.56738 },
    { country: "Jamaica", crimeRate: 46, latitude: 18.109581, longitude: -77.297508 },
    { country: "Japan", crimeRate: 11, latitude: 36.204824, longitude: 138.252924 },
    { country: "Jordan", crimeRate: 21, latitude: 30.585164, longitude: 36.238414 },
    { country: "Kazakhstan", crimeRate: 29, latitude: 48.019573, longitude: 66.923684 },
    { country: "Kenya", crimeRate: 33, latitude: -0.023559, longitude: 37.906193 },
    { country: "Kiribati", crimeRate: 21, latitude: -3.370417, longitude: -168.734039 },
    { country: "Korea (North)", crimeRate: 34, latitude: 40.339852, longitude: 127.510093 },
    { country: "Korea (South)", crimeRate: 23, latitude: 35.907757, longitude: 127.766922 },
    { country: "Kosovo", crimeRate: 33, latitude: 42.602636, longitude: 20.902977 },
    { country: "Kuwait", crimeRate: 12, latitude: 29.375859, longitude: 47.977405 },
    { country: "Kyrgyzstan", crimeRate: 30, latitude: 41.20438, longitude: 74.766098 },
    { country: "Laos", crimeRate: 26, latitude: 19.85627, longitude: 102.495496 },
    { country: "Latvia", crimeRate: 23, latitude: 56.879635, longitude: 24.603189 },
    { country: "Lebanon", crimeRate: 27, latitude: 33.854721, longitude: 35.862285 },
    { country: "Lesotho", crimeRate: 38, latitude: -29.609988, longitude: 28.233608 },
    { country: "Liberia", crimeRate: 46, latitude: 6.428055, longitude: -9.429499 },
    { country: "Libya", crimeRate: 43, latitude: 26.3351, longitude: 17.228331 },
    { country: "Liechtenstein", crimeRate: 8, latitude: 47.166, longitude: 9.555373 },
    { country: "Lithuania", crimeRate: 18, latitude: 55.169438, longitude: 23.881275 },
    { country: "Luxembourg", crimeRate: 19, latitude: 49.815273, longitude: 6.129583 },
    { country: "Madagascar", crimeRate: 32, latitude: -18.766947, longitude: 46.869107 },
    { country: "Malawi", crimeRate: 34, latitude: -13.254308, longitude: 34.301525 },
    { country: "Malaysia", crimeRate: 36, latitude: 4.210484, longitude: 101.975766 },
    { country: "Maldives", crimeRate: 21, latitude: 3.202778, longitude: 73.22068 },
    { country: "Mali", crimeRate: 39, latitude: 17.570692, longitude: -3.996166 },
    { country: "Malta", crimeRate: 17, latitude: 35.937496, longitude: 14.375416 },
    { country: "Marshall Islands", crimeRate: 24, latitude: 7.131474, longitude: 171.184478 },
    { country: "Mauritania", crimeRate: 31, latitude: 21.00789, longitude: -10.940835 },
    { country: "Mauritius", crimeRate: 18, latitude: -20.348404, longitude: 57.552152 },
    { country: "Mexico", crimeRate: 37, latitude: 23.634501, longitude: -102.552784 },
    { country: "Micronesia", crimeRate: 28, latitude: 7.425554, longitude: 150.550812 },
    { country: "Moldova", crimeRate: 29, latitude: 47.411631, longitude: 28.369885 },
    { country: "Monaco", crimeRate: 8, latitude: 43.750298, longitude: 7.412841 },
    { country: "Mongolia", crimeRate: 33, latitude: 46.862496, longitude: 103.846656 },
    { country: "Montenegro", crimeRate: 23, latitude: 42.708678, longitude: 19.37439 },
    { country: "Morocco", crimeRate: 36, latitude: 31.791702, longitude: -7.09262 },
    { country: "Mozambique", crimeRate: 37, latitude: -18.665695, longitude: 35.529562 },
    { country: "Myanmar", crimeRate: 32, latitude: 21.913965, longitude: 95.956223 },
    { country: "Namibia", crimeRate: 46, latitude: -22.95764, longitude: 18.49041 },
    { country: "Nauru", crimeRate: 14, latitude: -0.522778, longitude: 166.931503 },
    { country: "Nepal", crimeRate: 29, latitude: 28.394857, longitude: 84.124008 },
    { country: "Netherlands", crimeRate: 23, latitude: 52.132633, longitude: 5.291266 },
    { country: "New Zealand", crimeRate: 23, latitude: -40.900557, longitude: 174.885971 },
    // Add more countries and their respective crime rates, latitude, and longitude here...
  ];
  

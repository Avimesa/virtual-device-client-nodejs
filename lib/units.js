'use strict';

module.exports = Object.freeze({
	eAVI_ENG_UNIT_UNKNOWN : 0x0000, /**< Unknown unit type */
	eAVI_ENG_UNIT_AMPS_DC : 0x0001, /**< Amperage, DC */
	eAVI_ENG_UNIT_AMPS_AC : 0x0002, /**< Amperage, AC */
	eAVI_ENG_UNIT_VOLTS_DC : 0x0003, /**< Volts, DC */
	eAVI_ENG_UNIT_VOLTS_AC : 0x0004, /**< Volts, AC*/
	eAVI_ENG_UNIT_C : 0x0010, /**< Temperature, Celsius */
	eAVI_ENG_UNIT_F : 0x0011, /**< Temperature, Fahrenheit */
	eAVI_ENG_UNIT_K : 0x0012, /**< Temperature, Kelvin */
	eAVI_ENG_UNIT_PSI : 0x0020, /**< Pressure, pound-force per square inch */
	eAVI_ENG_UNIT_PA : 0x0021, /**< Pressure, pascal */
	eAVI_ENG_UNIT_BAR : 0x0022,	 /**< Pressure, bar */
	eAVI_ENG_UNIT_TORR : 0x0023,  /**< Pressure, torr */
	eAVI_ENG_UNIT_ATM : 0x0024,  /**< Pressure, atmosphere */
	eAVI_ENG_UNIT_PSID : 0x0028,  /**< Pressure, pound-force per square inch, differential */
	eAVI_ENG_UNIT_PAD : 0x0029,	/**< Pressure, pascal, differential */
	eAVI_ENG_UNIT_BARD : 0x002A,  /**< Pressure, bar, differential */
	eAVI_ENG_UNIT_TORRD	: 0x002B,  /**< Pressure, torr, differential */
	eAVI_ENG_UNIT_ATMD : 0x002C, /**< Pressure, atmosphere, differential */
	eAVI_ENG_UNIT_SEC : 0x0030, /**< Seconds */
	eAVI_ENG_UNIT_HZ : 0x0031, /**< Hertz */
	eAVI_ENG_UNIT_CPM : 0x0032, /**< Cycles Per Minute */
	eAVI_ENG_UNIT_METERS : 0x0040, /**< Meters */
	eAVI_ENG_UNIT_METER_PER_SEC : 0x0041, /**< Meters Per Second */
	eAVI_ENG_UNIT_METER_PER_SEC2 : 0x0042, /**< Meters Per Second^2 */
	eAVI_ENG_UNIT_FEET : 0x0043, /**< Feet */
	eAVI_ENG_UNIT_FEET_PER_SEC : 0x0044, /**< Feet Per Second */
	eAVI_ENG_UNIT_FEET_PER_SEC2 : 0x0045, /**< Feet Per Second^2 */
	eAVI_ENG_UNIT_INCHES : 0x0046, /**< Inches */
	eAVI_ENG_UNIT_INCHES_PER_SEC : 0x0047, /**< Inches Per Second */
	eAVI_ENG_UNIT_INCHES_PER_SEC2 : 0x0048,	/**< Inches Per Second^2 */
	eAVI_ENG_UNIT_YARDS : 0x0049, /**< Yards */
	eAVI_ENG_UNIT_YARDS_PER_SEC : 0x004A, /**< Yards Per Second */
	eAVI_ENG_UNIT_YARDS_PER_SEC2 :0x004B, /**< Yards Per Second^2 */
	eAVI_ENG_UNIT_KILOGRAM : 0x0050, /**< Kilogram */
	eAVI_ENG_UNIT_NEWTON : 0x0060, /**< Newton */
	eAVI_ENG_UNIT_JOULE : 0x0061, /**< Joule */
	eAVI_ENG_UNIT_WATT : 0x0062, /**< Watt */
	eAVI_ENG_UNIT_LPM : 0x0070, /**< Liter Per Minute */
	eAVI_ENG_UNIT_GPM : 0x0071, /**< Gallon Per Minute */
	eAVI_ENG_UNIT_CUBIC_METER : 0x0080, /**< Cubic Meter */
	eAVI_ENG_UNIT_IPS_PK : 0x0100, /**< Inches Per Second, Peak */
	eAVI_ENG_UNIT_IPS_RMS : 0x0101, /**< Inches Per Second, RMS */
	eAVI_ENG_UNIT_MMS_PK : 0x0102, /**< mm/s, Peak */
	eAVI_ENG_UNIT_MMS_RMS : 0x0103, /**< mm/s, RMS */
	eAVI_ENG_UNIT_G_RMS : 0x0104, /**< g, Peak */
	eAVI_ENG_UNIT_G_PK : 0x0105, /**< g, RMS */
	eAVI_ENG_UNIT_MILS_PK_PK : 0x0106, /**< mils, peak to peak */
	eAVI_ENG_UNIT_BOOL : 0x1000, /**< Boolean type data, 0 or 1 */
	eAVI_ENG_UNIT_ON_OFF : 0x1001, /**< On/off data, 0 or 1 */
	eAVI_ENG_UNIT_OPEN_CLOSED : 0x1002, /**< Open/Closed data, 0 or 1 */
	eAVI_ENG_UNIT_RUN_HOURS : 0x1010, /**< Run hours */
	eAVI_ENG_UNIT_LATITUDE : 0x1020, /**< Latitude */
	eAVI_ENG_UNIT_LONGITUDE : 0x1021, /**< Longitude */
	eAVI_ENG_UNIT_REL_HUM : 0x1031, /**< Relative Humidity */
	eAVI_ENG_UNIT_ABS_HUM : 0x1032, /**< Absolute Humidity */
	eAVI_ENG_UNIT_PERCENT :	0x1040,	/**< Percentage */
	eAVI_ENG_UNIT_PPM : 0x1050, /**< Parts Per Million */
	eAVI_ENG_UNIT_PPB : 0x1051, /**< Parts Per Billion */
	eAVI_ENG_UNIT_PPQ : 0x1052, /**< Parts Per Quadrillion */
	eAVI_ENG_UNIT_DB : 0x1060, /**< Decibels */
	eAVI_ENG_UNIT_DBA : 0x1061, /**< Decibels */
	eAVI_ENG_UNIT_ADC_COUNTS : 0xF000, /**< ADC Counts */
});

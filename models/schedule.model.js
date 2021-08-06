'use strict'

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ScheduleSchema = Schema ({
    nameSchedule: String,
    descriptionSchedule: String,
    daysWeek:String,
    userSchedule: { type: Schema.Types.ObjectId, ref:'users'},
    homeworks: {type: Schema.ObjectId, ref: 'homeworks'}
});

module.exports = mongoose.model('schedules', ScheduleSchema);
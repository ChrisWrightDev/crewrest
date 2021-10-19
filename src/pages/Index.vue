<template>
  <q-page style="background-color: light-grey">
    <q-form class="q-pa-md" @submit.prevent="generateTable">
      <div class="q-gutter-sm row">
        <q-input filled standout v-model="starttime" mask="time" label="Start Time" :rules="['time']" clearable dense>
          <template v-slot:prepend>
            <q-icon name="schedule" />
          </template>
        </q-input>
      </div>
      <div class="q-gutter-sm row">
        <q-input filled standout v-model="endtime" mask="time" label="End Time" :rules="['time']" clearable dense>
          <template v-slot:prepend>
            <q-icon name="schedule" />
          </template>
        </q-input>
      </div>
      <div class="q-gutter-sm row">
        <q-input filled standout v-model="timeBetween" label="Time Between" mask="time" :rules="['time']" clearable dense>
          <template v-slot:prepend>
            <q-icon name="schedule" />
          </template>
        </q-input>
      </div>
      <div class="q-gutter-md row">
        <q-select filled standout v-model="schedule" label="Rest Schedule" :options="scheduleOptions"
          style="width: 100%" dense behavior="menu" :rules="[val => !!val || 'Field is required']" />
      </div>
      <div class="q-gutter-lg row">
        <div class="col">
          <q-select filled standout v-model="constraint" :options="constraintOptions" label="Rest Constraint" behavior="menu" dense />
        </div>
        <div class="col">
          <q-input filled standout v-model="constraintValue" label="Enter Time" mask="time" clearable dense />
        </div>
      </div>
      <div class="q-ma-md row">
        <q-btn color="primary" type="submit" label="Generate" />
      </div>
    </q-form>
    <div class="q-mx-md q-pa-md resttable" v-if="tableGenerated">
      <div class="row">
        <div class="col-3">Period</div>
        <div class="col-4">Length</div>
        <div class="col-5">Start - End</div>
      </div>
      <div class="row" v-for="(row,i) in timeTable" :key="i">
        <div class="col-3">{{ i }}</div>
        <div class="col-4">{{ row[0] }}</div>
        <div class="col-5">{{ row[1] }}</div>
      </div>
    </div>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        tableGenerated: false,
        starttime: '03:30',
        endtime: '06:00',
        timeBetween: '00:10',
        schedule: '',
        scheduleOptions: [{
          label: '3 Equal',
          value: 'threeEqual'
        }, {
          label: '4 Equal',
          value: 'fourEqual'
        }, {
          label: 'sLLs',
          value: 'slls'
        }, {
          label: 'LLss',
          value: 'llss'
        }, {
          label: 'ssLL',
          value: 'ssll'
        }],
        constraint: '',
        constraintOptions: ['', 'Long Rest Equals', 'Short Rest Equals', 'Long Rest Max', 'Long Rest Min',
          'Short Rest Max', 'Short Rest Min'
        ],
        constraintValue: '',
        timeTable: [],
      }
    },

    methods: {

      generateTable() {
        let {
          startMinutes,
          endMinutes
        } = this.normalize()
        let totalTime = endMinutes - startMinutes

        this.timeTable = eval('this.' + this.schedule.value + '(totalTime, startMinutes)')

        this.tableGenerated = true
      },

      threeEqual(totalTime, start) {
        let interval = this.toMinutes(this.timeStringToTime(this.timeBetween))
        let long = Math.floor((totalTime - 2 * interval) / 3)
        let short = 0
        let first = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let second = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let third = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        let longString = this.timeToTimeString(long)
        let timeTable = [
          [longString, first],
          [longString, second],
          [lolongStringng, third],
        ]
        return timeTable
      },

      fourEqual(totalTime, start) {
        let interval = this.toMinutes(this.timeStringToTime(this.timeBetween))
        let long = Math.floor((totalTime - 3 * interval) / 4)
        let short = 0
        let first = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let second = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let third = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let fourth = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        let longString = this.timeToTimeString(long)
        let timeTable = [
          [longString, first],
          [longString, second],
          [longString, third],
          [longString, fourth],
        ]
        return timeTable
      },

      slls(totalTime, start) {
        let {short, long, interval} = this.applyContraint(totalTime)
        let first = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + short)
        start += (short + interval)
        let second = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let third = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let fourth = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + short)
        let longString = this.timeToTimeString(long)
        let shortString = this.timeToTimeString(short)
        let timeTable = [
          [shortString, first],
          [longString, second],
          [longString, third],
          [shortString, fourth],
        ]
        return timeTable
      },

      ssll(totalTime, start) {
        let {short, long, interval} = this.applyContraint(totalTime)
        let first = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + short)
        start += (short + interval)
        let second = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + short)
        start += (short + interval)
        let third = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let fourth = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        let longString = this.timeToTimeString(long)
        let shortString = this.timeToTimeString(short)
        let timeTable = [
          [shortString, first],
          [shortString, second],
          [longString, third],
          [longString, fourth],
        ]
        return timeTable
      },

      llss(totalTime, start) {
        let {short, long, interval} = this.applyContraint(totalTime)
        let first = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let second = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + long)
        start += (long + interval)
        let third = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + short)
        start += (short + interval)
        let fourth = this.timeToTimeString(start) + ' - ' + this.timeToTimeString(start + short)
        let longString = this.timeToTimeString(long)
        let shortString = this.timeToTimeString(short)
        let timeTable = [
          [longString, first],
          [longString, second],
          [shortString, third],
          [shortString, fourth],
        ]
        return timeTable
      },

      applyContraint(totalTime) {
        let interval = this.toMinutes(this.timeStringToTime(this.timeBetween))
        let short = Math.floor((totalTime - 3 * interval) / 6)
        let long = Math.floor((totalTime - 3 * interval - 2 * short) / 2)
        let cv = this.toMinutes(this.timeStringToTime(this.constraintValue))
        switch (this.constraint) {
          case 'Long Rest Equals':
            long = cv
            short = (Math.floor(totalTime - 3 * interval - 2 * long) / 2)
            break
          case 'Short Rest Equals':
            short = cv
            long = Math.floor((totalTime - 3 * interval - 2 * short) / 2)
            break
          case 'Long Rest Max':
            if (long > cv) long = cv
            short = (Math.floor(totalTime - 3 * interval - 2 * long) / 2)
            break
          case 'Short Rest Max':
            if (short > cv) short = cv
            long = Math.floor((totalTime - 3 * interval - 2 * short) / 2)
            break
          case 'Long Rest Min':
            if (long < cv) long = cv
            short = (Math.floor(totalTime - 3 * interval - 2 * long) / 2)
            break
          case 'Short Rest Min':
            if (short < cv) short = cv
            long = Math.floor((totalTime - 3 * interval - 2 * short) / 2)
            break
        }
        return {short, long, interval}
      },

      normalize() {
        let start = this.timeStringToTime(this.starttime);
        let end = this.timeStringToTime(this.endtime);
        if (end.minutes < start.minutes) {
          end.minutes += 60
          end.hours -= 1
        }
        if (end.hours < start.hours) end.hours += 24
        let startMinutes = this.toMinutes(start)
        let endMinutes = this.toMinutes(end)
        return {
          startMinutes,
          endMinutes
        }
      },

      toMinutes(time) {
        return time.hours * 60 + time.minutes
      },

      timeToTimeString(minutes) {
        let hours = Math.floor(minutes / 60)
        let mins = minutes - (hours * 60)
        if (hours > 23) hours -= 24
        let hoursString = hours < 10 ? "0" + hours.toString() : hours.toString()
        let minsString = mins < 10 ? "0" + mins.toString() : mins.toString()
        return hoursString + ":" + minsString
      },

      timeStringToTime(timeString) {
        let timeArray = timeString.split(':');
        let hours = parseInt(timeArray[0])
        let minutes = parseInt(timeArray[1]);

        return {
          hours,
          minutes
        }
      }
    }
  };

</script>

<style lang="sass">
  .q-page-container 
    background-color: black 
  .q-field__control, .resttable
    background-color: white !important
    border-radius: 10px !important

</style>

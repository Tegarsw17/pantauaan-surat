//logic:
//menentukan surat yang akan diminta approval
//create aproval

const {letterQueries} = require('../queries')
const message = require('../../response-helpers/messages').MESSAGE
const responseHendler = require('../../response-helpers/error-helper')
const { suratDecorator, suratObjekDecorator } = require('../decorators/surats-decorator')

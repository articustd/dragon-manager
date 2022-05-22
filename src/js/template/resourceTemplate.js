import { getScene } from "@GameEngine/Core";

Template.add('BasicResourceTotal', function() {
    return getScene('StartGame').getResource('Basic').total
})

Template.add('BasicWorkerTotal', function() {
    return getScene('StartGame').getResource('Basic').workers
})

Template.add('ComplexResourceTotal', function() {
    return getScene('StartGame').getResource('Complex').total
})

Template.add('ComplexWorkerTotal', function() {
    return getScene('StartGame').getResource('Complex').workers
})
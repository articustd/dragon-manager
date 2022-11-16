import { getScene } from "@GameEngine/Core";

Template.add('GoldResourceTotal', function() {
    return getScene('StartGame').getResource('Gold').total
})

Template.add('GoldWorkerTotal', function() {
    return getScene('StartGame').getResource('Gold').workers
})

Template.add('ComplexResourceTotal', function() {
    return getScene('StartGame').getResource('Complex').total
})

Template.add('ComplexWorkerTotal', function() {
    return getScene('StartGame').getResource('Complex').workers
})

Template.add('AdvancedResourceTotal', function() {
    return getScene('StartGame').getResource('Advanced').total
})

Template.add('AdvancedWorkerTotal', function() {
    return getScene('StartGame').getResource('Advanced').workers
})

Template.add('EventName', function() {
    return getScene('EventInteraction').name
})
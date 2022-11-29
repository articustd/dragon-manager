import { getScene } from "@GameEngine/Core";

Template.add('GoldResourceTotal', function() {
    return getScene('MainLoop').getResource('Gold').total
})

Template.add('GoldWorkerTotal', function() {
    return getScene('MainLoop').getResource('Gold').workers
})

Template.add('ComplexResourceTotal', function() {
    return getScene('MainLoop').getResource('Complex').total
})

Template.add('ComplexWorkerTotal', function() {
    return getScene('MainLoop').getResource('Complex').workers
})

Template.add('AdvancedResourceTotal', function() {
    return getScene('MainLoop').getResource('Advanced').total
})

Template.add('AdvancedWorkerTotal', function() {
    return getScene('MainLoop').getResource('Advanced').workers
})

Template.add('EventName', function() {
    return getScene('EventInteraction').name
})
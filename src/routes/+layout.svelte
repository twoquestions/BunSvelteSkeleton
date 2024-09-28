<script lang="ts">
	import { autoModeWatcher } from '@skeletonlabs/skeleton';
	import '../app.css';
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>

<slot />

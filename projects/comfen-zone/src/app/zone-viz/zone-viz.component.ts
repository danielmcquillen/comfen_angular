import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgtCanvas, extend, NgtBeforeRenderEvent, injectStore, NgtArgs } from 'angular-three';
import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';

extend(THREE);
extend({ OrbitControls });

@Component({
    imports: [NgtArgs],
    template: `
  <ngt-ambient-light [intensity]="0.5" />
  <ngt-spot-light [position]="10" [angle]="0.15" [penumbra]="1" />
  <ngt-point-light [position]="-10" />
  <ngt-mesh (beforeRender)="onBeforeRender($any($event))"
            (pointerover)="hovered=true;"
            (pointerout)="hovered=false">
      <ngt-box-geometry [position]="position1" />
      <ngt-mesh-standard-material [color]="hovered ? 'darkblue' : 'green'" />
  </ngt-mesh>
  <ngt-mesh (beforeRender)="onBeforeRender($any($event))"
            [castShadow]="true"
            (pointerover)="hovered=true;"
            (pointerout)="hovered=false">
      <ngt-box-geometry [position]="position2" />
      <ngt-mesh-standard-material [color]="hovered ? 'darkblue' : 'blue'" />
  </ngt-mesh>
  <ngt-orbit-controls *args="[camera, glDom]" [enableDamping]="true" />
`,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZoneVizSceneGraph {
  private readonly store = injectStore();
  readonly camera = this.store.get('camera');
  readonly glDom = this.store.get('gl', 'domElement');

  position1 = new THREE.Vector3(0, 10, 10);
  position2 = new THREE.Vector3(50, 0, 10);
  active = false;
  hovered = false;

  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.y += 0.01;
  }
}

@Component({
    selector: 'zone-viz',
    imports: [NgtCanvas],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './zone-viz.component.html',
    styleUrl: './zone-viz.component.scss'
})
export class ZoneVizComponent {

  readonly ZoneVizSceneGraph = ZoneVizSceneGraph;
}



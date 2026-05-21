"use client";

import React from "react";
import styles from "./Services.module.css";

interface ServiceData {
  num: string;
  name: string;
  desc: string;
  deliverables: string[];
  tech: string[];
}

const SERVICES_LIST: ServiceData[] = [
  {
    num: "01",
    name: "Custom Model Training & Fine-Tuning",
    desc: "We train, evaluate, and deploy high-accuracy custom deep learning models optimized for your unique visual datasets. From YOLOv8/v10 object detection to Segment Anything (SAM) zero-shot segmentation.",
    deliverables: [
      "Custom Object Detection (YOLO, Faster R-CNN)",
      "Semantic & Instance Segmentation (SAM, Mask R-CNN)",
      "Custom Visual Classification & Feature Vectors",
      "Transfer Learning & Fine-Tuning Pipelines",
    ],
    tech: ["PyTorch", "YOLOv8 / YOLOv10", "Segment Anything", "ResNet / ViT"],
  },
  {
    num: "02",
    name: "Real-Time Video Analytics Pipelines",
    desc: "High-throughput live stream ingestion and event detection systems. We engineer multi-camera processing engines designed to count objects, track movement vectors, identify anomalies, and trigger instant system notifications.",
    deliverables: [
      "Multi-Stream RTSP / WebRTC Video Ingestion",
      "Object Tracking & Directional Counting (ByteTrack)",
      "Virtual Boundary & Intrusion Detection",
      "Density Estimation & Heatmap Generation",
    ],
    tech: ["OpenCV", "DeepSORT / ByteTrack", "RTSP / WebRTC", "GStreamer"],
  },
  {
    num: "03",
    name: "Model Optimization & Edge Deployments",
    desc: "Unlock maximum hardware capabilities with custom inference acceleration. We compile and optimize deep learning models for sub-millisecond speeds on specialized edge devices, reducing cloud costs and latency.",
    deliverables: [
      "Model Quantization & Pruning (FP16, INT8)",
      "TensorRT & ONNX Runtime Compilations",
      "NVIDIA Jetson & Embedded Hardware Deployment",
      "High-Concurrency Cloud GPU Scaling",
    ],
    tech: ["TensorRT", "ONNX Runtime", "NVIDIA Jetson", "Triton Server"],
  },
  {
    num: "04",
    name: "Dataset Annotation & Curation Pipelines",
    desc: "High-quality dataset curation is the absolute foundation of successful AI. We construct robust visual dataset pipelines, implement automated pre-labeling routines, and manage precise manual annotation QA.",
    deliverables: [
      "Automated Pre-Labeling & Data Augmentation",
      "Dataset Curation, Deduplication, & QA Auditing",
      "Exporting to COCO, YOLO, & Pascal VOC Formats",
      "Synthetic Image Generation & Augmentations",
    ],
    tech: ["Roboflow", "CVAT", "Albumentations", "Stable Diffusion"],
  },
];

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <div className={styles.headLeft}>
            <span className={styles.sectionTag}>Expertise</span>
            <h2 className={styles.sectionTitle}>
              Our visual AI <em>capabilities</em>
            </h2>
          </div>
          <p className={styles.headDesc}>
            We engineer high-performance computer vision systems tailored for visual inspection, 
            security, robotics, agriculture, and defense. From raw pixels to real-time production inference.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {SERVICES_LIST.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.cardHeader}>
                <span className={styles.sNum}>{service.num}</span>
                <h3 className={styles.sName}>{service.name}</h3>
              </div>
              
              <p className={styles.sDesc}>{service.desc}</p>
              
              <div className={styles.divider}></div>
              
              <div className={styles.deliverablesSection}>
                <h4>Key Deliverables</h4>
                <ul className={styles.deliverablesList}>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className={styles.deliverableItem}>
                      <span className={styles.bullet}>✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.techSection}>
                {service.tech.map((item, idx) => (
                  <span key={idx} className={styles.techChip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

